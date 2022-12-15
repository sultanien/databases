const values = [
  `INSERT INTO account(balance)
        VALUES 
        (3000), 
        (10000), 
        (7000);
    `,

   `INSERT INTO account_changes(account_number, amount, changed_date, remark)
        VALUES
        (100, 500, "2022-11-23 10:00:12", "Money is transferred to account"),
        (102, 500, "2022-11-23 11:22:28", "Money is transferred from account");

    `
];
export default values