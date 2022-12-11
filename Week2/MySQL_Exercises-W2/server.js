import mysql from "mysql";
import { authorsQuery, authorsTable } from "./exercise1.js";
import {
  paperTable,
  joinTable,
  authorsData,
  paperData,
  junctionTableData,
} from "./exercise2.js";
import { sql } from "./exercise3.js";
import { aggregateFunctions } from "./exercise4.js";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "research",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySql is connected");
});

const tableDropper = [
  `DROP TABLE IF EXISTS author_research`,
  `DROP TABLE IF EXISTS authors`,
  `DROP TABLE IF EXISTS research_papers`,
];

const createQuery = (query) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log("progress is done");
  });
};

const processQuery = (query) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
};
tableDropper.forEach((query) => createQuery(query));
authorsTable.forEach((query) => createQuery(query));
authorsQuery.forEach((query) => createQuery(query));

paperTable.forEach((query) => createQuery(query));
joinTable.forEach((query) => createQuery(query));

authorsData.forEach((query) => createQuery(query));
paperData.forEach((query) => createQuery(query));
junctionTableData.forEach((query) => createQuery(query));

sql.forEach((query) => processQuery(query));

aggregateFunctions.forEach((query) => processQuery(query));
