//HTTP

// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been
// traditionally difficult to use .
// const http = require ( ' http ' ) ;
// import http from ' http ' ;
// createServer ( [ options ] [ , requestListener ] ) - Returns a new instance of http.Server .

//create web server -http module

import http from "http";

// const server = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/plain");
//   res.end("response from server");
// });

// server.listen(8000, "localhost", () => {
//   console.log("server running at http://localhost:8000");
// });

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain");
  res.end("response from server 1");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("server running at http://localhost:8000");
});
