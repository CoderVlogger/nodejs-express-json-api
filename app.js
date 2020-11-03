const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  let body = {
    "message": "Hello, world!",
    "items": [
      "str1",
      "str2",
      "str3"
    ]
  };
  const { headers, method, query, url } = req;
  const responseBody = { headers, method, query, url, body };

  res.write(JSON.stringify(responseBody));
  res.end();
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
