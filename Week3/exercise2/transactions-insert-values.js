import {connection } from "./transaction.js";


let accountValues = [];

let account_changesValues = [];


for(let i = 1; i <= 10; i++ ){
    const randomBalance = parseFloat((Math.random() * 100000.0).toFixed(2));
    accountValues.push([randomBalance]);
}

for(let i = 100; i<=105; i++){
    const randomBalance = parseFloat((Math.random() * 10000.0).toFixed(2));
    account_changesValues.push(
        [   i, 
            randomBalance, 
            new Date(), 
            "Transaction is successful"
        ]
    );

}

async function seedDatabase() {
   try {
     await connection.query(`INSERT INTO account(balance) VALUES ?`,[accountValues], (error, result) => {
        if (error) {
            throw error;
        } else {
            console.log('account balance values successfully inserted');
        }
    });

    await connection.query(`INSERT INTO account_changes(account_number, amount, changed_date, remark) VALUES ?`, [account_changesValues], (error, result) => {
        if (error) {
            throw error;
        } else {
            console.log('account_changes values successfully inserted');
        }
    });

   } catch (err) {
     console.error(err.message);
   }
 }
 seedDatabase();