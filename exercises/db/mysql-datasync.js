const mysql = require("mysql");
const fetch = require("node-fetch");

async function datasync() {
  //calling users endpoint
  const response = await fetch("https://gorest.co.in/public-api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const users = await response.json();

  const connection = mysql.createConnection({
    host: "localhost",
    database: "sagar",
    user: "root",
    password: "password",
    insecureAuth: true,
  });

  await connection.connect();

  connection.query(
    "INSERT INTO user (id, name, email, gender, status) VALUES (2, 'sagar', 's', 'M', 'active');",
    (err, rows) => {
      // console.log(err);
      console.log(rows);
    }
  );

  connection.end();
}

datasync();
