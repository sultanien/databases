import { MongoClient, ServerApiVersion } from "mongodb";
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
       
        await printPopulationPerYear(client, "Netherlands");

        await printPopulationToAgeAndYear(client, "100+", 2020)
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}

main().catch(console.error);


async function printPopulationPerYear(client, country){
  const pipeline = [
    {
      '$match': {
        'Country': country
      }
    }, {
      '$group': {
        '_id': '$Year', 
        'countPopulation': {
          '$sum': {
            '$add': [
              '$M', '$F'
            ]
          }
        }
      }
    }, {
      '$sort': {
        '_id': 1
      }
    }
  ];

  const aggCursor = client.db("Week4").collection("population_pyramid").aggregate(pipeline);
  let result = [];
  await aggCursor.forEach(element => {
    result.push(element);
  });
  console.log(result);
}

async function printPopulationToAgeAndYear(client, age, year) {

  const pipeline = [
    {
      '$match': {
        'Country': {
          '$in': [
            'AFRICA', 'ASIA', 'EUROPE', 'LATIN AMERICA AND THE CARIBBEAN', 'NORTHERN AMERICA', 'OCEANIA'
          ]
        }, 
        'Year': year, 
        'Age': age
      }
    }, {
      '$addFields': {
        'TotalPopulation': {
          '$sum': {
            '$add': [
              '$M', '$F'
            ]
          }
        }
      }
    }, {
      '$sort': {
        'Country': 1
      }
    }
  ]

  const aggCursor = client.db("Week4").collection("population_pyramid").aggregate(pipeline);
  let result = [];
  await aggCursor.forEach(element => {
    result.push(element);
  });
  console.log(result);
}