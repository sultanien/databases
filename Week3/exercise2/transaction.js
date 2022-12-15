import mysql from "mysql";
import values from "./transactions-insert-values.js"
import { tables, tableDropper } from "./transactions-create-table.js";

const transaction = [
    `SET AUTOCOMMIT = 0;`,

    `START TRANSACTION;`,

    `UPDATE account 
        SET balance = balance - 1000 
        WHERE account_number = 101;`

    `INSERT INTO account_changes (account_number, amount, changed_date, remark)
        VALUES(101, 1000, "2022-12-12 22:00:12", "Money is transferred from account");`
    
    `UPDATE account 
        SET balance = balance + 1000 
        WHERE account_number = 102;`
    
    `INSERT INTO account_changes (account_number, amount, changed_date, remark)
        VALUES(102, 1000, "2022-12-12 22:00:12", "Money is transferred to account");`
];


const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "userdb",
  });

connection.connect();

try{
    await processQuery(tableDropper);
    await processQuery(tables);
    await processQuery(values);
    await processQuery(transaction);
    connection.commit();
}catch(error){
    connection.rollback();
    console.log(error);
}

connection.end();

console.log(typeof transaction)

async function processQuery(query) {
    query.forEach((element) => {
        connection.query(element,(error, result) => {
            if (error) {
                throw error;
            } else {
                console.log(result);
            }
        });
    });
}