const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.write('<h1>Hello World!</h1>');
  res.write('<p>Hello Node Server!</p>');
  res.end('<p>end</p>');
});

server.listen(PORT);

server.on('listening', () => {
  console.log(`listening on ${PORT}`);
});

server.on('error', (error) => {
  console.error(error);
});
