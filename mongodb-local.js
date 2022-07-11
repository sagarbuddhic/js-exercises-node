var MongoClient = require("mongodb").MongoClient;

var dbUrl = "mongodb://127.0.0.1:27017/local";

MongoClient.connect(dbUrl, function (err, db) {
  if (err) {
    throw err;
  } else {
    let database = db;
    console.log("Successful");
  }
});
