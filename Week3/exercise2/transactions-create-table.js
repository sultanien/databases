import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
});

const tables = [
  `CREATE TABLE IF NOT EXISTS account(
        account_number INT AUTO_INCREMENT PRIMARY KEY, 
        balance DECIMAL(15, 2)
    )`,

    `ALTER TABLE account AUTO_INCREMENT= 100`,

  `CREATE TABLE IF NOT EXISTS account_changes(
        change_number INT AUTO_INCREMENT PRIMARY KEY, 
        account_number INT,
        amount DECIMAL(15, 2), 
        changed_date DATETIME, 
        remark varchar(255),
        FOREIGN KEY(account_number) REFERENCES account(account_number)
    )`,
];

processQuery(tables);

export async function processQuery(query) {
  query.forEach((element) => {
      connection.query(element,(error, result) => {
          if (error) {
              throw error;
          } else {
              console.log('successful');
          }
      });
  });
};
