const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

const DB_KEY = process.env.DB_KEY;
const uri = `mongodb+srv://sagar_buddhic:${DB_KEY}@cluster0.ebjcl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const query = { _id: "10006546" };
  const collection = client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });

  //   client.close();
});
