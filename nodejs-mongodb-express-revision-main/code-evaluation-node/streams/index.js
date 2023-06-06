const fs = require("node:fs");

const readableStream = fs.createReadStream("streams/file.txt", {
  encoding: "utf8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("streams/file2.txt");

readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
