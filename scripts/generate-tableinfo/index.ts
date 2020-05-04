import fs from 'fs-extra';
import Handlebars from 'handlebars';
import Database from './database';

const db = new Database('./master.db');

interface TableInfo {
  name: string;
  className: string;
  fields: TableField[];
  classFields: TableClassField[];
  mergeFields: MergeField[];
}

interface TableField {
  cid: number;
  name: string;
  type: string;
  notnull: number;
  dflt_value: number;
  pk: number;
}

interface TableClassField {
  field: string;
  column: string;
  name: string;
  camelName: string;
  type: string;
}

interface MergeField {
  name: string;
  type: string;
  fields: string[];
  fieldText?: string;
}

function snakeToPascal(str: string) {
  return str.split("/")
    .map(snake => snake.split("_")
      .map(substr => substr.charAt(0)
        .toUpperCase() +
        substr.slice(1))
      .join(""))
    .join("/");
};

function snakeToPascalLower(str: string) {
  const s = snakeToPascal(str);
  return s.charAt(0).toLowerCase() + s.substr(1);
};

async function getTableNames() {
  const table = await db.all<{ name: string }[]>(`select name from sqlite_master where type='table'`);
  return table.map(x => x.name).filter(x => x !== 'sqlite_stat1');
}

function toNodeType(type: string): string {
  switch(type) {
    case 'INTEGER':
      return 'number';
    case 'REAL':
      return 'number';
    case 'TEXT':
      return 'string';
    case 'BLOB':
      return 'string';
    default:
      return 'string';
  }
}

function toTypeORMType(type: string): string {
  switch(type) {
    case 'INTEGER':
      return 'integer';
    case 'REAL':
      return 'real';
    case 'TEXT':
      return 'text';
    case 'BLOB':
      return 'text';
    default:
      return 'text';
  }
}

function toGraphQLType(type: string): string {
  switch(type) {
    case 'INTEGER':
      return 'Int';
    case 'REAL':
      return 'Float';
    case 'TEXT':
      return 'String';
    case 'BLOB':
      return 'String';
    default:
      return 'String';
  }
}

function mergeSubFields(fields: TableField[]) {
  const regex = /^([a-zA-Z]+)([0-9]+)$/;
  const map: Map<string, MergeField> = new Map<string, MergeField>();

  fields.forEach(x => {
    const fullName = snakeToPascalLower(x.name);
    if (regex.test(fullName)) {
      const exec = regex.exec(fullName);
      const name = exec[1];
      const type = toGraphQLType(x.type);

      if (!map.has(name)) {
        const fields: string[] = [];
        map.set(name, { name, type, fields });
      }

      if (map.get(name).type !== type) {
        throw new Error(`subfields must be of the same type. name: ${name}, map.type: ${map.get(name).type}, type: ${x.type}`);
      }

      const item = map.get(name);
      item.fields.push(fullName);
    }
  });

  const checkExistFieldName = (name: string) => {
    return !!fields.filter(x => snakeToPascalLower(x.name) === name).length;
  };

  return Array.from(map.values())
    .filter(item => item.fields.length > 1)
    .map(item => {
    if (checkExistFieldName(item.name)) {
      item.name += 'Array';
    }
    item.fieldText = item.fields.map(x => 'this.' + x).join(', ').toString();
    return item;
  });
}

async function getTableInfo(name: string) {
  const fields = await db.all<TableField[]>(`PRAGMA table_info(${name});`);

  const className = snakeToPascal(name);
  const classFields = [] as TableClassField[];

  fields.forEach((x) => {
    const cf = {} as TableClassField;
    cf.name = x.name;
    cf.camelName = snakeToPascalLower(x.name);
    cf.type = toNodeType(x.type);

    if (x.pk >= 1) {
      cf.field = `@Field(type => ID)`;
      cf.column = `@PrimaryColumn({ name: '${x.name}', type: '${toTypeORMType(x.type)}' })`;
    } else if (x.notnull === 0) {
      cf.name += '?';
      cf.field = `@Field(type => ${toGraphQLType(x.type)}, { nullable: true })`;
      cf.column = `@Column({ name: '${x.name}', type: '${toTypeORMType(x.type)}', nullable: true })`;
    } else {
      cf.field = `@Field(type => ${toGraphQLType(x.type)})`;
      cf.column = `@Column({ name: '${x.name}', type: '${toTypeORMType(x.type)}' })`;
    }
    classFields.push(cf);
  });

  const mergeFields = mergeSubFields(fields);

  const tableInfo: TableInfo = { name, className, fields, classFields, mergeFields };
  return tableInfo;
}

async function getTableArray() {
  const array: TableInfo[] = [];
  const tables = await getTableNames();

  for (const name of tables) {
    array.push(await getTableInfo(name));
  }
  return array;
}

function isTableInfo(tableInfo: TableInfo | TableInfo[]): tableInfo is TableInfo {
  return (tableInfo as TableInfo).name !== undefined;
}

async function make(type: 'Entity' | 'Resolver', tableInfo: TableInfo): Promise<void>;
async function make(type: 'EntityIndex' | 'ResolverIndex', tables: TableInfo[]): Promise<void>;
async function make(type: string, param: TableInfo | TableInfo[]) {
  if (type === 'Entity' || type === 'Resolver') {
    if (!isTableInfo(param)) return;

    const tableInfo = param;
    const { template, generate } = (() => {
      if (type === 'Entity') {
        return {
          template: fs.readFileSync(__dirname + '/template/entity.handlebars').toString(),
          generate: (className: string, result: string) =>
            fs.outputFileSync(`./src/generated/entities/${className}.ts`, result)
        };
      } else if (type === 'Resolver') {
        return {
          template: fs.readFileSync(__dirname + '/template/resolver.handlebars').toString(),
          generate: (className: string, result: string) =>
            fs.outputFileSync(`./src/generated/resolvers/${className}Resolver.ts`, result)
        };
      }
    })();

    const compiled = Handlebars.compile(template);
    generate(tableInfo.className, compiled(tableInfo));

  } else if (type === 'EntityIndex' || type === 'ResolverIndex') {
    if (isTableInfo(param)) return;

    const tables = param;
    const { content, generate } = (() => {
      if (type === 'EntityIndex') {
        return {
          content: tables.map(x => `export * from './${x.className}';`).join('\n'),
          generate: (content: string) =>
            fs.outputFileSync('./src/generated/entities/index.ts', content)
        };
      } else if (type === 'ResolverIndex') {
        return {
          content: tables.map(x => `export * from './${x.className}Resolver';`).join('\n'),
          generate: (content: string) =>
            fs.outputFileSync('./src/generated/resolvers/index.ts', content)
        };
      }
    })();

    generate(content);
  }
}

function makeEntity(tableInfo: TableInfo) {
  return make('Entity', tableInfo);
}

function makeResolver(tableInfo: TableInfo) {
  return make('Resolver', tableInfo);
}

function makeEntityIndex(tables: TableInfo[]) {
  return make('EntityIndex', tables);
}

function makeResolverIndex(tables: TableInfo[]) {
  return make('ResolverIndex', tables);
}

async function main() {
  const tables = await getTableArray();
  for (const table of tables) {
    await makeEntity(table);
    await makeResolver(table);
  }

  await makeEntityIndex(tables);
  await makeResolverIndex(tables);

  db.close();
  console.log('generated');
}

main();
