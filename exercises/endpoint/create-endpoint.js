"use strict";

import express from "express";
import mysql from "mysql2";
import { Sequelize, DataTypes } from "sequelize";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
const password = "";

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.
let data = [];

app.post("/candidates", function (req, res) {
  if (req.body) {
    data.push(req.body);
    res.status(200).send("OK");
  } else {
    res.status(400).send("Bad Request");
  }
});

app.get("/candidates/search", function (req, res) {
  if (!req.query.skills) {
    res.sendStatus(400);
  }

  let queryValues = req.query.skills;
  let queryArray = queryValues.split(",");

  let responseObject;
  let greatest = 0;
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let skillCount = 0;
    queryArray.forEach((skill) => {
      if (data[i].skills && data[i].skills.includes(skill)) {
        skillCount++;
      }
    });

    if (skillCount > 0 && skillCount > greatest) {
      greatest = skillCount;
      responseObject = data[i];
    }
  }

  if (greatest === 0) {
    res.sendStatus(404);
  }
  res.set("Content-Type", "application/json");
  res.send(responseObject);
});

app.get("/users/mysql", (req, res) => {
  const db = new mysql.createConnection({
    host: "localhost",
    user: "sagar",
    password: password,
    database: "testdb",
  });
  db.connect();

  db.query("Select * from users", (err, results) => {
    if (err) throw err;

    console.log(results);
    res.send(results); // send database rows as JSON
  });

  db.end();
});

app.get("/users/mysql/sequelize", async (req, res) => {
  const sequelize = new Sequelize("testdb", "sagar", password, {
    host: "localhost",
    dialect: "mysql",
  });
  const User = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      timestamps: false, // Disable createdAt & updatedAt
    }
  );
  await sequelize.authenticate();
  const users = await User.findAll();
  console.log(users);
  res.json(users.map((u) => u.toJSON()));
});

app.get("/users/mongodb", async (req, res) => {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("testdb");
  const users = db.collection("users");

  // await users.insertOne({ name: "bo", email: "g@gmail.com", age: 21 });
  const allUsers = await users.find().toArray();
  res.json(allUsers);
});

app.get("/users/mongoose", async (req, res) => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    age: Number,
  });
  const User = mongoose.model("users", userSchema);
  // const newUser = await User.create({
  //   name: "bo",
  //   email: "g@mail.com",
  //   age: 22,
  // });

  // await User.updateOne({ name: "bo" }, { age: 26 });
  // await User.deleteOne({ email: "alice@example.com" });
  const users = await User.find();

  res.json(users);
});

app.listen(process.env.HTTP_PORT || 3000);
