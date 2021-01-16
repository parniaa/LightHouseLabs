let httpServer = require('http');
let  server = httpServer.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("hi there armin");
});
server.listen(7000);