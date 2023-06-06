var fs = require("fs");

//append content at the end of the file:
fs.appendFile(
  "mynewfile1.txt",
  " This is my text from from update file.",
  function (err) {
    if (err) throw err;
    console.log("Updated!");
  }
);
