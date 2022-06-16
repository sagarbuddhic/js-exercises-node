const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(`request`);
    setImmediate(() => {
      console.log('test');
    });
    let limit = 10;
    let series = [];
    let nextValue;
    for (i = 0; i < limit; i++) {
      nextValue = i;
      if ([0, 1].includes(i)) {
        series.push(nextValue);
        continue;
      }
      nextValue = series[i - 1] + series[i - 2];
      series.push(nextValue);
    }
    res.write(JSON.stringify(series));
    res.end();
  })
  .listen(8080);
