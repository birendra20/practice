/** 
  module wrapper

before a modules code is executed ,
node.js will wrap it with function wrapper that look like the following
 
*/

(function (exports, require, module, __filename, __dirname) {
  //module code actually lives in here
});
// console.log(exports, require, module);
// console.log(__dirname);
// console.log(__filename);
console.log(module);
