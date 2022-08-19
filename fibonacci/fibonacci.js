const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let limit = 10;
    let series = [0, 1];
    for (i = 2; i < limit; i++)
      series.push(series[i - 1] + series[i - 2]);

    res.write(JSON.stringify(series));
    res.end();
  })
  .listen(8080);
