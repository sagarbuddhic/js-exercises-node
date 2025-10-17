const { MongoClient } = require("mongodb");

const mongoServerInsert = async () => {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("testdb");
  const users = db.collection("users");

  const result = await users.insertOne({ name: "Alice", age: 25 });

  const user = await users.findOne({ name: "Alice" });

  client.close();
};
