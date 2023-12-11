import sqlite3 from 'sqlite3';
import md5 from 'md5';

describe('Database Tests', () => {
  let db;

  beforeAll((done) => {
    db = new sqlite3.Database(':memory:', done);
  });

  afterAll((done) => {
    db.close(done);
  });

  test('Table should be created', (done) => {
    db.run(`CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text, 
      password text
    )`, (err) => {
      expect(err).toBeNull();
      done();
    });
  });

  test('Rows should be inserted', (done) => {
    const insert = 'INSERT INTO user (name, password) VALUES (?, ?)';
    db.run(insert, ["Admin", md5("duckdnsnews")], (err) => {
      expect(err).toBeNull();
      db.run(insert, ["Editor", md5("duckdnseditor")], (err) => {
        expect(err).toBeNull();
        done();
      });
    });
  });
});
