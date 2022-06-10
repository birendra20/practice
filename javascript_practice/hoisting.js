//in simple hoisting is a default behaviour of javascript where all the variable and functions declaration moves on top.
//during compile phase ,just microsecond before our code is executed ,it is scanned for variables and function declaration
//all this variable and function declaration are added to a memory inside a javascript data structure called lexical environment.
//so they can be used even before they are actually declared in the source code

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
// console.log(a); //ReferenceError: Cannot access 'a' before initialization

// let a = 3;
