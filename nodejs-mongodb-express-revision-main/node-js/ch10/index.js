//nodemon and http

import http from "http";

const server = http.createServer((req, res) => {
  //Request
  // console.log(req.url);
  // if (req.url != "/favicon.ico") {
  //   console.log(req.url);
  // }
  // console.log(req.method);
  //Response
  //res.statusCode =202;
  //res.status.Message="Good";
  //res.setHeader("content-type", "text/plain");
  //res.writeHead(202,"Good",{"content-type":"text/plain"})
  //res.end("response from server 2");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log("server running at http://localhost:8000");
});
