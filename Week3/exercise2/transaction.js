/** @format */

import { connection } from "./transactions-create-table.js";
import util from "util";

const executeQuery = util.promisify(connection.query.bind(connection));

async function transaction(account_from, account_to, amount) {

  const updateQuery = `UPDATE account 
  SET balance = ? 
  WHERE account_number = ?`
  const insertQuery = "INSERT INTO account_changes (account_number, amount, changed_date, remark) VALUES ?"
  const newAccountValueOfAccount_from = await getAccountBalance(account_from)-amount;
  const newAccountValueOfAccount_to = await getAccountBalance(account_to) + amount;
  const changes = [
    [account_from, amount, new Date(), "Transaction is successful"],
    [account_to,amount, new Date(),"Transaction is successful",]
  ];

  try {
    await executeQuery("SET AUTOCOMMIT = 0");
    await executeQuery("START TRANSACTION");
    await executeQuery(updateQuery,[newAccountValueOfAccount_from,account_from]);
    await executeQuery(updateQuery, [newAccountValueOfAccount_to, account_to]);
    await executeQuery(insertQuery, [changes]);
    await executeQuery("COMMIT");
  } catch (error) {
    console.error(error);
    await executeQuery("ROLLBACK");
  }

}

async function getAccountBalance(id) {
  const query = `SELECT balance FROM account WHERE account_number = ?`;
  const balance =  await executeQuery(query, id);
  const balanceValue = JSON.parse(JSON.stringify(balance));
  const result = balanceValue[0].balance;
  return result
}

 transaction(101,102,1000);