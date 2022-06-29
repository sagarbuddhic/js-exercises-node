const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://sagar_buddhic:@cluster0.ebjcl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const collections = client
    .db("sample_airbnb")
    .collections("listingsAndReviews");
  console.log(collections);
  //   connect.close();
});
