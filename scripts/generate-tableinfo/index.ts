import sqlite3 from 'sqlite3';
import Handlebars from 'handlebars';
import fs from 'fs-extra';

const db = new sqlite3.Database('./master.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    throw err;
  }
});

interface TableInfo {
  name: string;
  className: string;
  fields: TableField[];
  classFields: TableClassField[];
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
  type: string;
}

async function getTableNames() {
  return new Promise<string[]>((resolve, reject) => {
    db.serialize(() => {
      db.all("select name from sqlite_master where type='table'", (err, table) => {
        if (err) {
          reject(err);
          return;
        }

        const tables = table.map(x => x.name).filter(x => x !== 'sqlite_stat1');
        resolve(tables);
      });
    });
  });
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

async function getTableInfo(db: sqlite3.Database, name: string) {
  return new Promise<TableInfo>((resolve, reject) => {
    db.all(`PRAGMA table_info(${name});`, (err, fields: TableField[]) => {
      if (err) {
        reject(err);
        return;
      }

      const className = snakeToPascal(name);
      const classFields = [] as TableClassField[];

      fields.forEach((x) => {
        const cf = {} as TableClassField;
        cf.name = x.name;
        cf.type = toNodeType(x.type);

        if (x.pk >= 1) {
          cf.field = `@Field(type => ID)`;
          cf.column = `@PrimaryColumn('${toTypeORMType(x.type)}')`;
        } else if (x.notnull === 0) {
          cf.name += '?';
          cf.field = `@Field()`;
          cf.column = `@Column({ nullable: true, type: '${toTypeORMType(x.type)}' })`;
        } else {
          cf.field = `@Field()`;
          cf.column = `@Column('${toTypeORMType(x.type)}')`;
        }
        classFields.push(cf);
      });

      const tableInfo: TableInfo = { name, className, fields, classFields };
      resolve(tableInfo);
    });
  });
}

async function getTableArray() {
  const tables = await getTableNames();
  const tableArr: TableInfo[] = [];

  for (const name of tables) {
    tableArr.push(await getTableInfo(db, name));
  }
  return tableArr;
}


async function makeModel(tableInfo: TableInfo) {
  const str = fs.readFileSync(__dirname + '/template/model.handlebars').toString();
  const compiled = Handlebars.compile(str);
  const result = compiled(tableInfo);

  fs.outputFileSync('./src/generated/models/' + tableInfo.className + '.ts', result);
}

async function makeResolver(tableInfo: TableInfo) {
  const str = fs.readFileSync(__dirname + '/template/resolver.handlebars').toString();
  const compiled = Handlebars.compile(str);
  const result = compiled(tableInfo);

  fs.outputFileSync('./src/generated/resolvers/' + tableInfo.className + 'Resolver.ts', result);
}

async function createModelIndex(tables: TableInfo[]) {
  const content = tables.map(x => `export * from './${x.className}';`).join('\n');
  fs.outputFileSync('./src/generated/models/index.ts', content);
}

async function createResolverIndex(tables: TableInfo[]) {
  const content = tables.map(x => `export * from './${x.className}Resolver';`).join('\n');
  fs.outputFileSync('./src/generated/resolvers/index.ts', content);
}

async function main() {
  const tables = await getTableArray();
  for (const table of tables) {
    await makeModel(table);
    await makeResolver(table);
  }

  await createModelIndex(tables);
  await createResolverIndex(tables);

  db.close();
  console.log('generated');
}

main();
