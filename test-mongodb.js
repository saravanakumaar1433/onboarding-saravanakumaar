const { MongoClient } = require("mongodb");
require("dotenv").config();

async function testConnection() {
  const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

  try {
    await client.connect();

    console.log("Connected to MongoDB");

    const db = client.db(process.env.DATABASE_NAME);
    const collection = db.collection(process.env.COLLECTION_NAME);

    const users = await collection.find({}).toArray();

    console.log(users);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

testConnection();