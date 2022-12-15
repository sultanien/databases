export const tables = [
  `CREATE TABLE IF NOT EXISTS account(
        account_number INT AUTO_INCREMENT PRIMARY KEY, 
        balance INT
    )`,

    `ALTER TABLE account AUTO_INCREMENT= 100`,

  `CREATE TABLE IF NOT EXISTS account_changes(
        change_number INT AUTO_INCREMENT PRIMARY KEY, 
        account_number INT,
        amount INT, 
        changed_date DATETIME, 
        remark varchar(255),
        FOREIGN KEY(account_number) REFERENCES account(account_number)
    )`,
];

export const tableDropper = [
  `DROP TABLE IF EXISTS account_changes`,
  `DROP TABLE IF EXISTS account`
];
