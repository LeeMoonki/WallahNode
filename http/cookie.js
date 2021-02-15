const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => {
  return cookie.split(';').map(c => c.trim().split('=')).reduce((acc, [k, v]) => {
    if (acc instanceof Array) {
      const [k1, v1] = acc;
      return {
        [k1]: decodeURIComponent(v1),
        [k]: decodeURIComponent(v)
      };
    }
    acc[k] = decodeURIComponent(v);
    return acc;
  });
};

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);

  if (req.url.startsWith('/login')) {
    // https://nodejs.org/dist/latest-v15.x/docs/api/url.html
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();

    expires.setMinutes(expires.getMinutes() + 5);

    // https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)};Expires=${expires.toUTCString()}`,
    });
    res.end();
  } else if (cookies.name) {
    res.writeHead(200, {
      'Content-type': 'text/html;charset=utf-8',
    });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    fs.readFile('./login.html', (err, data) => {
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

