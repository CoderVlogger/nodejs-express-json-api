const express = require('express');

const app = express();

//const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = {
    "message": "Hello, world!",
    "items": [
      "str1",
      "str2",
      "str3",
      "Hello, world in item 4"
    ]
  };
  const { headers, method, query, url } = req;
  const responseBody = { headers, method, query, url, body };

  res.send(JSON.stringify(responseBody));
})

app.listen(port, () => {
  console.log(`Example app running at ${port} port`);
})