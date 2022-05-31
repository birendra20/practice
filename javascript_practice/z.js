let name = setTimeout(function () {
  console.log("birendra");
}, 10000);

setTimeout(() => {
  clearTimeout(name);
}, 1000);

// // setTimeout(function () {
// //   console.log(arr1.sort());
// // }, 0);

// let a = null;
// let b;
// console.log(a == b);
// console.log(a === b);

// function goOffEverySecond() {
//   console.log("Another one");
// }
// const timer = setTimeout(goOffEverySecond, 5000);
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

// function fun() {
//   console.log(" Welcome to the javaTpoint.com ");
// }

// a = setInterval(fun, 3000);

// setTimeout(() => {
//   clearTimeout(a);
// }, 10000);

// let name = setInterval(function () {
//   console.log("birendra");
// }, 3000);

// setTimeout(() => {
//   clearTimeout(name);
// }, 10000);

// function sum(a) {
//   return function sum(b) {
//     return function sum(c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(5)(6)(4));
