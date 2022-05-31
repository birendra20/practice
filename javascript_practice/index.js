/////////////////////////////////////////////////////////////////////////////////////////////////

// // Array.prototype.myMap = function (callback) {
// //   arr = [];
// //   for (var i = 0; i < this.length; i++) {
// //     arr.push(callback(this[i]));
// //   }

// //   return arr;
// // };

// // let str = [1, 2, 3, 4, 5];

// // function double(a) {
// //   return a * 10;
// // }
// // const check = str.myMap(double);

// // console.log(check);

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NATIVE forEACH>>>>>>>>>>>>>>>>>>>>

// // Array.prototype.myEach = function (callback) {
// //   for (var i = 0; i < this.length; i++) callback(this[i], i, this);
// // };

// // var arr = ["biggy smalls", "bif tannin", "boo radley", "hans gruber"];
// // arr.myEach(function (word) {
// //   console.log(word);
// // });

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NATIVE Filter>>>>>>>>>>>>>>>>>>>>

// Array.prototype.myFilter = function(callback, context) {
//     arr = [];
//     for (var i = 0; i < this.length; i++) {
//         if (callback.call(context, this[i], i, this))
//             arr.push(this[i]);
//     }
//     return arr;
// };

// //tests
// var numbers = [1, 20, 30, 80, 2, 9, 3];
// var newNum = numbers.myFilter(function(n) {
//     return n >= 10;
// });
// console.log(newNum); // [ 20, 30, 80 ]

/* 
   Implement forEach, map, filter, find, reduce
*/

// forEach

// var arr = [1, 2, 4, 8,10, 12];
// //array.forEach(callback(currentValue, index, arr))

// Array.prototype.myForEach = function (callback){
//   for(let index = 0; index< this.length; index++){
//     callback(this[index], index, this);
//   }
// }

// arr.myForEach((currentValue)=>{
//   console.log(currentValue + 100);

// })

// //array.map(callback(currentValue, index, array))

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let index = 0; index< this.length; index++){
//         result.push(callback(this[index], index, this));
//   }
//   return result;
// }

// Array.prototype.myFilter = function (callback){
//   let result = [];
//   for(let index = 0; index< this.length; index++) {
//     if (callback(this[index], index, this)) {
//       result.push(this[index]);
//     }
//   }
//   return result;
// }

// let result = arr.myFilter((item)=>{
//   return item > 8;
// })
// console.log(result);

// Array.prototype.myFind = function (callback){
//   for(let index = 0; index< this.length; index++) {
//     if (callback(this[index], index, this)) {
//          return this[index];
//     }
//   }
// }

// console.log(arr.myFind(item => item > 8));

// var arr = [1, 2, 4, 8,10, 12];

// //arr.reduce((accumulator, currentValue, index, arr)=>{}, initialValue);

// console.log(arr.reduce((acc, currentValue, index, arr)=>{return (acc + currentValue)} , 1));

// Array.prototype.myReduce = function (callback, initialValue){
//   let accumulator = initialValue;
//   for(let index = 0; index< this.length; index++) {
//     accumulator = callback(accumulator, this[index], index, this);
//   }

//   return accumulator;
// }

// console.log (arr.myReduce((acc, value, index, arr)=> acc + value, 1));
