const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  console.log("Connected successfully to server");
}

run().catch(console.dir);

module.exports = client;