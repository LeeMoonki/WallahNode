const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require('querystring');
const { parseCookies } = require('./parseCookies');

const session = {};

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);

  console.log('cookie and session : ', cookies, session);

  if (req.url.startsWith('/login')) {
    // https://nodejs.org/dist/latest-v15.x/docs/api/url.html
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    const randomInt = new Date() - 0;

    session[randomInt] = { name, expires };

    expires.setMinutes(expires.getMinutes() + 5);

    // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${randomInt};Expires=${expires.toUTCString()}`,
    });
    res.end();
  } else if (
    cookies.session
    && session[cookies.session]
    && session[cookies.session].expires > new Date()
  ) {
    res.writeHead(200, {
      'Content-type': 'text/html;charset=utf-8',
    });
    res.end(`${session[cookies.session].name}님 안녕하세요`);
  } else {
    fs.readFile(path.resolve(__dirname, './login.html'), (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
});

server.listen(8080);

server.on('listening', () => {
  console.log('listening on 8080');
});

server.on('error', (error) => {
  console.error(error);
});

