// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 1000);
// setTimeout(function () {
//   console.log(3);
// }, 0);
// console.log(4);
// // 1
// // 4
// // 3
// // 2

////////////////////////////////////////////////////////////////////////////////////////////
// function x() {
//   setTimeout(function () {
//     console.log(i); //1
//   }, 1000);
//   var i = 1;
// }

// x();

//////////////////////////////////////////////////////////////////////////////////////////

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i); //1
//   }, 1000);
// }

// x();
//////////////////////////////////////////////////////////////////////////////////////////

// a = { age: 18 };
// b = { age: 18 };

// console.log(a == b); //false
// console.log(a === b); //false

// a = { age: 18 };
// b = { age: 18 };
// a = b;
// console.log(a == b); //true
// console.log(a === b); //true
////////////////////////////////////////////////////////////////////////
function getAge(...args) {
  console.log(typeof args);
}
getAge(21);