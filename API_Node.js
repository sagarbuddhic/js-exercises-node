const http = require('http');

http
  .createServer((req, res) => {
    http.get('http://nodejs.org/dist/index.json', (endpointRes) => {
      const { statusCode } = endpointRes;
      const contentType = endpointRes.headers['content-type'];

      let rawData = '';
      endpointRes.on('data', (chunk) => {
        rawData += chunk;
      });
      endpointRes.on('end', () => {
        res.write(JSON.stringify(JSON.parse(rawData)));
        res.end();
      });
    });
  })
  .listen(8080);
