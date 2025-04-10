const fetch = require("node-fetch");

fetch("http://nodejs.org/dist/index.json", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err);
  });
