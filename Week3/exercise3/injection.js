import mysql from "mysql";

const conn = {
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "new_world",
};

const db = mysql.createConnection(conn);

db.connect;


//getPopulation("Country", "Netherlands", "TUR 'OR' 1=1;", console.log);

//Why can't I table the result?

function getPopulation(Country, name, code, cb) {
    name = db.escape(name);
    code = db.escape(code);
    db.query(
      `SELECT Population FROM ${Country} WHERE Name = '?' and code = '?'`,
      function (err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(result);
      }
    );
  };

getPopulation("country", "Netherlands", "NLD", console.table);