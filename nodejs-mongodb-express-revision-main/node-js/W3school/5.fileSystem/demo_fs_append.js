var fs = require("fs");

fs.appendFile(
  "mynewfile1.txt",
  "this file is created used appendFile",
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
