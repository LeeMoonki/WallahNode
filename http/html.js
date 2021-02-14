const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) { throw err; }
    else {
      res.end(data);
    }
  });
});

server.listen(8080);

server.on('listening', () => {
  console.log('listening on 8080');
});

server.on('error', (error) => {
  console.error(error);
});

