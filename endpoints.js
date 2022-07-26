"use strict";

const express = require("express");
const app = express();
app.use(express.json());

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

app.listen(process.env.HTTP_PORT || 3000);
