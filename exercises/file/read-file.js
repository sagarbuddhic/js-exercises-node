const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./test.json', (err, resp) => {
    
  console.log('Reading');
    if(err) {
      throw err;
    }
    
    res.write(response);
    res.end();
  });
}).listen(8080);