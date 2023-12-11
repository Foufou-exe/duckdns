import sqlite3 from 'sqlite3';
import md5 from 'md5';
import path from 'path';

const dbPath = path.join('./config/sql', 'db.sqlite');

let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            password text
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("Table already created")
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, password) VALUES (?,?)'
                db.run(insert, ["Admin",md5("duckdnsnews")])
                db.run(insert, ["Editor",md5("duckdnseditor")])
                console.log("Table created")
            }
        });  
    }
});


export default db;