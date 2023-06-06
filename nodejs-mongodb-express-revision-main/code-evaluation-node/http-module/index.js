const http = require("node:http");
const fs = require("node:fs");
// const server = http.createServer((req, res) => {
//   console.log("req", req);
//   // const html = fs.readFileSync("./index.html", "utf8");
//   res.writeHead(200, { "Content-Type": "text/html" });

//   fs.createReadStream(__dirname + "/index.html").pipe(res);
//   // res.end(html);
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { ContentType: "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
