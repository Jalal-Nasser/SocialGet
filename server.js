const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public/test.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading test.html');
      }
      res.writeHead(200);
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Test server running on http://localhost:3000');
});