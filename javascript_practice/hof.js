//higher order functions are the function that operate at other function,either by taking them as argument or retuning them as an output.
//in simple word H-O-F is a function that receives a function or return the function as output

///////////////////////////////////////map//////////////////////////////

let arr = [1, 265, 354, 44, 58];

// // res = arr.map(function (el) {
// //   return el * 10;
// // });

// res = arr.map((el) => el * 10);
// console.log(res);

////////////////////////////////////////forEach/////////////////////

res = arr.forEach((el) => {
  console.log(el * 10);
  // return el * 10;
});

//////////////////////////////////////filter///////////////

// let above3 = arr.filter(function (el) {
//   return el > 300;
// });

// let above3 = arr.filter((el) => el > 50);
// console.log(above3);

/////////////////reduce////////////////////////////

// let sum = arr.reduce(function (ac, cv) {
//   return ac + cv;
// });

// let sum = arr.reduce((ac, cv) => {
//   return ac + cv;
// });
// console.log(sum);
