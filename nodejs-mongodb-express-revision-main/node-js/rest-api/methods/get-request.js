module.exports = (req, res) => {
  // http://localhost:5000/api/movies/cea805a6-50fa-47bc-8422-65957a6ce12b
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log("baseUrl", baseUrl); //  "/api/movies/"
  console.log(req.url.split("/")); //  [ '', 'api', 'movies', 'cea805a6-50fa-47bc-8422-65957a6ce12b' ]
  let id = req.url.split("/")[3];
  console.log("id", id);
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );
  console.log("regexV4", regexV4);
  if (req.url === "/api/movies") {
    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Failed",
        message: "UUId is not a valid",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    res.setHeader("Content-Type", "application/json");

    let filteredMovie = req.movies.filter((movie) => {
      return movie.id == id;
    });

    if (filteredMovie.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filteredMovie));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Movie not found" })
      );
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

/**
 * https://www.agiratech.com/the-complete-list-of-http-status-codes-and-error-codes#400_Bad_Request
 * 
 * Success codes
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
Client-side errors
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
409 Conflict
413 Payload Too Large
415 Unsupported Media Type
422 Unprocessable Entity
429 Too Many Requests
451 Unavailable For Legal Reasons
Server-side errors
500 Internal Server Error
503 Service Unavailable
504 Gateway Timeout
Redirection
301 Moved Permanently
302 Found (Moved temporarily)
304 Not Modified


In the code snippet res.setHeader("Content-Type", "application/json");, 
=> res.setHeader() is a method of the res object in Node.js,that is used to set an HTTP response header.
 

=> HTTP headers provide additional information about the response being sent from the server to the client. 
The "Content-Type" header specifically specifies the type of content being sent in the response.

=> By calling res.setHeader("Content-Type", "application/json"), 
  you are setting the "Content-Type" header of the response to "application/json".  
  This indicates to the client that the content of the response is in JSON format.

=> The "Content-Type" header is important for the client 
   because it helps it understand how to interpret and process the response. 
   In this case, by setting the "Content-Type" to "application/json", 
   you are signaling to the client that the response body will be in JSON format,
   and it should handle the response data accordingly.

=> When the client receives a response with the "Content-Type" set to "application/json", 
  it can parse the response body as JSON and work with the data in a structured manner.

  Setting the "Content-Type" header correctly is essential for proper communication between the server and the client, 
 ensuring that both sides understand the format and content of the data being exchanged.
 */
