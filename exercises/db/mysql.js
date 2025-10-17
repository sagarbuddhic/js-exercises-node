const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "FIRSTDATABASE",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
  connection.query("select * from firsttable;", (err, result) => {
    if (err) throw err;
    console.log(`result: ${JSON.stringify(result)}`);
  });
});

const conn = mysql.createConnection({
  host: "localhost",
});
