import sqlite3 from 'sqlite3';

export default class Database {
  private db: sqlite3.Database;

  constructor(filename: string, mode: number = sqlite3.OPEN_READONLY) {
    this.db = new sqlite3.Database(filename, mode);
  }

  public close() {
    return new Promise<void>((resolve, reject) => {
      this.db.close((err: Error | null) => err ? reject(err) : resolve());
    });
  }

  public run(sql: string) {
    return new Promise<void>((resolve, reject) => {
      this.db.run(sql, (err: Error | null) => err ? reject(err) : resolve());
    });
  }

  public get<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.db.get(sql, (err: Error | null, row: T) => err ? reject(err) : resolve(row));
    });
  }

  public all<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.db.all(sql, (err: Error | null, rows: T) => err ? reject(err) : resolve(rows));
    });
  }

  public each<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.db.each(sql, (err: Error | null, rows: T) => err ? reject(err) : resolve(rows));
    });
  }

  public exec<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.db.each(sql, (err: Error | null, rows: T) => err ? reject(err) : resolve(rows));
    });
  }

  public prepare<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.db.each(sql, (err: Error | null, rows: T) => err ? reject(err) : resolve(rows));
    });
  }
}
