/*
 Promise API
The fs / promises API provides asynchronous file system methods that return promises .

mkdir ( ) - Asynchronously creates a directory .
Syntax : - mkdir ( path [ , options ] )

readdir ( ) - Reads the contents of a directory .
Syntax : - readdir ( path [ , options ] )

rmdir ( ) - Removes the directory identified by path .
Syntax : - rmdir ( path [ , options ] )

writeFile ( ) - Asynchronously writes data to a file , replacing the file if it already exists .
Syntax : - writeFile ( file , data [ , options ] )

readFile ( ) - Asynchronously reads the entire contents of a file .
Syntax : - readFile ( path [ , options ] )

appendFile ( path , data [ , options ] ) - Asynchronously append data to a file , creating the file if it does not yet exist .
Syntax : - appendFile ( path , data [ , options ] )

copyFile ( ) - Asynchronously copies src to dest . By default , dest is overwritten if it already exists .
Syntax : - copyFile ( src , dest [ , mode ] )

stat ( ) - Used to get file information .
Syntax : - stat ( path [ , options ] )

 * / 




import * as fs from "fs/promises";

//creating directory -path should be there

// try {
//   await fs.mkdir(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5\\promiseApi"
//   );
//   console.log("created");
// } catch (error) {
//   console.log(error);
// }

//creating directory -path not require

// try {
//   await fs.mkdir(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5\\demo\\test",
//     { recursive: true }
//   );
//   console.log("created");
// } catch (error) {
//   console.log(error);
// }

// Read the content of the Directory
// try {
//   const files = await fs.readdir(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5"
//   );

//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

//Remove Directory - Directory should be empty

// try {
//   await fs.rmdir(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5\\demo\\test"
//   );
//   console.log("removed");
// } catch (error) {
//   console.log(error);
// }

// // create and write file

// try {
//   await fs.writeFile("readme.txt", "hello welcome to node js Tutorial");
// } catch (error) {
//   console.log(error);
// }

// Read file

// try {
//   const data = await fs.readFile("readme.txt");
//   console.log(data); //it will return buffer  <Buffer 68 65 6c 6c 6f 20 77 65 6c 63 69 61 6c>
// } catch (error) {
//   console.log(error);
// }

// try {
//   const data = await fs.readFile("readme.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// // Append data into file

// try {
//   await fs.appendFile("readme.txt", " from GeekyShow");
// } catch (error) {
//   console.log(error);
// }

// copy file

// try {
//   await fs.copyFile("readme.txt", "copied.txt");
// } catch (error) {
//   console.log(error);
// }

// Get file information

// try {
//   const stats = await fs.stat(
//     "C:\\Users\\biren\\OneDrive\\Desktop\\nodejs-mongodb-express-revision\\ch5"
//   );
//   console.log(stats.isDirectory());
//   console.log(stats.isFile());
//   console.log(stats);
// } catch (error) {
//   console.log(error);
// }
