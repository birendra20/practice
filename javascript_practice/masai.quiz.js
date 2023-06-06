// var x = 100;

// function alpha() {
//   var x = 200;
//   function beta() {
//     console.log(x);
//   }
//   return beta;
// }

// var gamma = alpha();
// gamma();//200

///////////////////////////////////////////////////

// var name = "Ajay";

// function printDetails() {
//   console.log(this.name);
// }

// var person = {
//   name: "Haren",
//   company: "masai",
//   print: printDetails(),
// };

// let a = person.print(); //TypeError: person.print is not a function

///////////////////////////////////////////

// "use strict";

// function alpha() {
//   var name = "masai";
//   console.log(this.name);
// }
// var name = "masai_school";

// alpha();//TypeError: Cannot read properties of undefined (reading 'name')

///////////////////////////////////////////////////////

// function getName() {
//   var status = true;
//   if (status) {
//     const name = "masai";
//   }
//   console.log(name);
// }

// getName();

//////////////////////////////////////////////////////

// "use strict";

// function printDetails() {
//   console.log(this.name);
// }

// var person = {
//   name: "haren",
//   company: "masai",
//   print: printDetails,
// };
// person.print();

// var name = "ajay";//haren

/////////////////////////////////////////////////

// var str = "masai";
// var { length } = str;

////////////////////////////////////////////

// name = "masai";
// var name;
// console.log(name); //masai

// ////////////////////////////////////////////
// function alpha() {
//   var x = 100;
//   this.beta();
// }

// function beta() {
//   var x = 200;
//   console.log(this.x);
// }
// alpha();//this.beta is not a function

/////////////////////////////////

// arr = ["a", "b", "c", "d", "e"];

// const func = ([f, ...r]) => r.reduce((a, c) => a + c) + f;
// console.log(func(arr));//bcdea

///////////////////////////////////////
// function getName() {
//   name = "albert";
// }

// getName();
// console.log(name); //albert

/////////////////////////////////////////////////
// const prod = (x) => {
//   x = x + 5;
//   return (inner) => x * inner;
// };

// console.log(prod(5)(10));//100

///////////////////////////////////////////////////////////
// printName("shoenil");

// var printName = function (name) {
//   console.log("hello", name);
// };//TypeError: printName is not a function

////////////////////////////////////////////////////////
// printName("shoniel"); //hello shoniel

// var printName;

// function printName(name) {
//   console.log("hello", name);
// }

// printName = function (name) {
//   console.log("hey", name);
// };

///////////////////////////////////////////////////
// function alpha() {
//   var name = "masai";
//   console.log(this.name);//undefined
// }

// var name = "masai_school";

// alpha();

//////////////////////////////////////////////

// name = x || "name";
// console.log(name);//name
// var x = "masai";

//////////////////////////////////////////

// console.log(name);//ReferenceError: name is not defined
// name = "masai";

//////////////////////////////////////////

// const sum = (x, y) => {
//   x = x || 5;
//   y = y || 10;
//   return x + y;
// };
// console.log(sum(0, 10)); //15

////////////////////////////////////////////////

// function getYear() {
//   var year = new Date().getFullYear();
//   return year;
// }

// getYear();

// console.log(year); //
// //ReferenceError: year is not defined;

///////////////////////////////////////////

// function getName() {
//   var status = true;

//   if (status) {
//     var name = "masai";
//   }
//   console.log(name);//masai
// }
// getName();

//////////////////////////////////////////

// console.log(name);//undefined

// var name = "masai";

////////////////////////////////////////

// const sum = (x, y) => {
//   x = x && 5;
//   y = y || 5;
//   return x + y;
// };
// console.log(sum(20, 5));//10

////////////////////////////
// console.log(name);//undefined
// name = "masai";
// var name;

////////////////////////////////////

// function cont(x) {
//   var y = x * 10;
//   function val(z) {
//     console.log(x, y, z);//3 30 150
//   }
//   val(y * 5);
// }
// cont(3);

/////////////////////////////////////////////

// foo();

// function foo() {
//   console.log("hello");//hello
// }

//////////////////////////////////////

function value(b) {
  const a = 100;
  a = b;
  return a;
}
console.log(value(100));