// const path = require("node:path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

// Import the 'path' module from the Node.js core library and assign it to the 'path' variable.
const path = require("node:path");

// Print the base name of the current file (__filename) using the 'basename' function from the 'path' module.
// The 'basename' function extracts the last portion of the path, excluding the directory.
console.log(path.basename(__filename));

// Print the base name of the current directory (__dirname) using the 'basename' function from the 'path' module.
// The 'basename' function extracts the last portion of the directory path, excluding the parent directory.
console.log(path.basename(__dirname));

// Print the extension of the current file (__filename) using the 'extname' function from the 'path' module.
// The 'extname' function returns the file extension (including the dot).
console.log(path.extname(__filename));

// Print the extension of the current directory (__dirname) using the 'extname' function from the 'path' module.
// Since directories do not have extensions, this will return an empty string.
console.log(path.extname(__dirname));

// Parse the current file's path (__filename) using the 'parse' function from the 'path' module.
// The 'parse' function returns an object with properties like 'root', 'dir', 'base', 'name', and 'ext'
// that represent different parts of the path.
console.log(path.parse(__filename));

// Format the parsed path object of the current file using the 'format' function from the 'path' module.
// The 'format' function converts the path object back into a string representation of the path.
console.log(path.format(path.parse(__filename)));

// Check if the given path (__filename) is an absolute path using the 'isAbsolute' function from the 'path' module.
// The 'isAbsolute' function returns true if the path is absolute, otherwise false.
console.log(path.isAbsolute(__filename));

// Check if the given path ("./data.json") is an absolute path using the 'isAbsolute' function.
// Since the path is relative (starts with './'), this will return false.
console.log(path.isAbsolute("./data.json"));

// Join multiple path segments ('folder1', 'folder2', 'index.html') together using the 'join' function from the 'path' module.
// The 'join' function constructs a path by concatenating the segments with the correct path separator.
console.log(path.join("folder1", "folder2", "index.html"));

// Join multiple path segments ('/folder1', 'folder2', 'index.html') together using the 'join' function.
// Since the first segment starts with '/', it represents the root directory.
console.log(path.join("/folder1", "folder2", "index.html"));

// Join multiple path segments ('/folder1', '//folder2', 'index.html') together using the 'join' function.
// The extra '/' in '//folder2' is ignored, as it doesn't affect the resulting path.
console.log(path.join("/folder1", "//folder2", "index.html"));

// Join multiple path segments ('/folder1', '//folder2', '../index.html') together using the 'join' function.
// The '../' segment represents moving one level up from 'folder2' to the parent directory.
console.log(path.join("/folder1", "//folder2", "../index.html"));

// Join the current directory (__dirname) and the segment 'data.json' together using the 'join' function.
// This constructs a path by appending 'data.json' to the current directory path.
console.log(path.join(__dirname, "data.json"));

console.log(path.resolve("folder1", "folder2", "index.html"));
// Resolve the given path segments ('folder1', 'folder2', 'index.html') into an absolute path using the 'resolve' function from the 'path' module.
// The 'resolve' function returns the absolute path by resolving the segments relative to the current working directory.

console.log(path.resolve("/folder1", "folder2", "index.html"));
// Resolve the given path segments ('/folder1', 'folder2', 'index.html') into an absolute path using the 'resolve' function.
// Since the first segment starts with '/', it represents the root directory.

console.log(path.resolve("/folder1", "//folder2", "index.html"));
// Resolve the given path segments ('/folder1', '//folder2', 'index.html') into an absolute path using the 'resolve' function.
// The extra '/' in '//folder2' is ignored, as it doesn't affect the resulting path.

console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// Resolve the given path segments ('/folder1', '//folder2', '../index.html') into an absolute path using the 'resolve' function.
// The '../' segment represents moving one level up from 'folder2' to the parent directory.

console.log(path.resolve(__dirname, "data.json"));
// Resolve the current directory (__dirname) and the segment 'data.json' into an absolute path using the 'resolve' function.
// This returns the absolute path by resolving the segment relative to the current directory.

// Please note that the comments below are repeated from earlier explanations.
