import { MongoClient, ServerApiVersion } from "mongodb";
import { createAccountCollection, deleteAccountCollection } from "./setup.js";
import dotenv from "dotenv";
dotenv.config();


async function main() {
    if (process.env.MONGODB_URL == null) {
      throw Error(
        `No env variable is available!`
      );
    }
    const client = new MongoClient(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    try{
        await client.connect;
        console.log("Connected!");

        await deleteAccountCollection(client);

        await createAccountCollection(client);

        await createTransfer(client, 101, 102, 1000);
        
    }catch(err){
        console.error(err);
    }finally{
       await client.close();
    }
}

main().catch(console.error);


async function createTransfer(client, from_accountNo, to_accountNo, amount){
    const  accountCollection = await client.db("Week4").collection("account");


    const session = client.startSession();

    const transactionOptions = {
        readPreference: "primary",
        readConcern: { level: "local" },
        writeConcern: { w: "majority" },
    };

    try{
        const transactionResult = await session.withTransaction(async()=>{

            const from_account_update = await accountCollection.updateOne(
                {account_number : from_accountNo},
                {
                    $inc: {balance: -amount},
                    $push: { account_changes: {
                        change_number: await update_change_number(client, from_accountNo),
                        amount: amount,
                        date: new Date(),
                        remark: "Transaction is successful"
                      }
                    },
                },
                {session}
            );

            console.log(`${from_account_update.matchedCount} document(s) found in the account collection`)

            const to_account_update = await accountCollection.updateOne(
                {account_number: to_accountNo} ,
                {
                    $inc: {balance: +amount},
                    $push: { account_changes:{
                        change_number: await update_change_number(client, to_accountNo),
                        amount: amount,
                        date: new Date(),
                        remark: "Transaction is successful"}
                    },
                },
                {session}
            );

            console.log(`${to_account_update.matchedCount} document(s) found in the account collection`)

            const is_to_account = await accountCollection.findOne(
                {account_number: to_accountNo}
            );

            if(!is_to_account){
                await session.abortTransaction();
                console.error("This account does not exist. Transaction is cancelled!")
            }
        }, transactionOptions)

        if(transactionResult){
            console.log("Transaction is successfully operated")
        }else{
            console.log("Something is wrong")
        }
    }catch (err) {
        console.log("The transaction was aborted due to an unexpected error: " + err)
    }finally {
        await session.endSession();
    }
}


async function update_change_number(client, account_no) {
    const result = await client
        .db("Week4")
        .collection("account")
        .findOne({ account_number: account_no});
    return result.account_changes.length + 1;
};