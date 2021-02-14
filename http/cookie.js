const http = require('http');

const server = http.createServer((req, res) => {

});

server.listen(8080);

server.on('listening', () => {
  console.log('listening on 8080');
});

server.on('error', (error) => {
  console.error(error);
});

