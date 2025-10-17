const mysql = require("mysql2/promise");

async function mysqlFunction() {
  const connect = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "",
  });

  await connect.execute(`CREATE TABLE IF NOT EXISTS`);

  const [result] = await connection.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    ["Alice", "alice@example.com"]
  );

  const [rows] = await connection.execute("SELECT * from users");

  await connect.end();
}
