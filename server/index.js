const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(`request received ${req.method} ${req.url}`);
  if (req.method === 'GET') {
    res.writeHead(200, {
      "access-control-allow-origin": "*",
    });
    res.end('Hello World!\n');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
