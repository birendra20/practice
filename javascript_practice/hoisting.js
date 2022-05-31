




//hoisting function declaration <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// helloWorld();

// function helloWorld() {
//   console.log("helloWorld");//helloWorld
// }

////hoisting function expression <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// only function declaration are hoisted in JS,function expressions are not hoisted

// helloWorld();

// var helloWorld = function () {
//   console.log("helloWorld"); // TypeError: helloWorld is not a function
// };

//hoisting var variable;<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// console.log(a); //undefined

// var a = 3;

//hoisting let and const variables<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(a); //ReferenceError: Cannot access 'a' before initialization

let a = 3;
