const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const geojson = fs.readFileSync('./test.json');
    console.log(geojson);
    res.write('test');
    res.end();
  })
  .listen(8080);
