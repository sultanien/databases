export async function createAccountCollection(client) {
    const accounts = createAccount(120);
    const result = await client
      .db("Week4")
      .collection("account")
      .insertMany(accounts);
    console.log(`${result.insertedCount} new documents are created`);
}


export async function deleteAccountCollection(client) {
    const result = await client
      .db("Week4")
      .collection("account")
      .deleteMany({});
    console.log(`${result.deletedCount} documents were deleted.`);
  }

function createAccount(number) {
    let accounts = [];
    for (let i =1; i <= number; i++) {
      const randomAccountBalance = +(Math.random() * 100000.0).toFixed(2);
      const randomChangeBalance = +(Math.random() * 10000.0).toFixed(2);
      const accountDocument = {
        account_number: i,
        balance: randomAccountBalance,
        account_changes: [
          {
            change_number: 1,
            amount: randomChangeBalance,
            changed_date: new Date(),
            remark: "Transaction is successful",
          },
        ],
      };
      accounts.push(accountDocument);
    }
 
    return accounts;
}