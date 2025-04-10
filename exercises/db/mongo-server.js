const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

async function mongoServer() {
  const DB_KEY = process.env.DB_KEY;
  const uri = `mongodb+srv://sagar_buddhic:${DB_KEY}@cluster0.ebjcl.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  await client.connect();

  const db = client.db("sample_work");
  db.collection("users")
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      const output = results.map((result) => ({
        id: result.id,
        name: result.name,
        email: result.email,
        gender: result.gender,
        status: result.status,
      }));
      console.log(`out`, output);
    });
}

mongoServer();
