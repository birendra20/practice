var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);

//If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!

// Start your internet browser, and type in the address: http://localhost:8080
