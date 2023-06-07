const http = require("http");
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route not found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

/**
 * 
 * req and res properties
 * req.url: The URL of the requested resource.
req.method: The HTTP method of the request (e.g., GET, POST, PUT, DELETE).
req.headers: An object containing the HTTP headers of the request.
req.params: An object containing the route parameters (for routes with parameters).
req.query: An object containing the query parameters of the URL.
req.body: The body of the request (available if you're using a middleware like body-parser to parse the request body).
And here are some commonly used properties of the res object:

res.statusCode: The HTTP status code to be sent in the response.
res.setHeader(name, value): A method to set an HTTP header in the response.
res.writeHead(statusCode, headers): A method to write the response status code and headers in a single call.
res.write(chunk): A method to write a chunk of the response body.
res.end(data): A method to end the response and send optional data as the last chunk.
 */
