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

        const tables = table.map(x => x.name).filter(x => x !== 'SqliteStat1');
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
      return 'any';
    default:
      return 'any';
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
      return '';
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

      fields.forEach((x, i) => {
        const cf = {} as TableClassField;
        cf.name = x.name;
        cf.type = toNodeType(x.type);

        if (i === 0) {
          cf.field = `@Field(type => ID)`;
          cf.column = `@PrimaryColumn('${toTypeORMType(x.type)}')`;
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
  const str = fs.readFileSync(__dirname + '/template.pug').toString();
  const compiled = Handlebars.compile(str);
  const result = compiled(tableInfo);
  fs.outputFileSync('./src/generated/models/' + tableInfo.className + '.ts', result);
}

async function main() {
  const tables = await getTableArray();
  for (const table of tables) {
    await makeModel(table);
  }
}

main();

console.log('generate models');
