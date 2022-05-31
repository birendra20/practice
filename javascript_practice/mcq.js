///////////////////////////////////////////////////////////////
//1

// function sayHi() {
//   // console.log(name); //undefined
//   // console.log(age); //ReferenceError: Cannot access 'age' before initialization
//   console.log(surname); //ReferenceError: Cannot access 'surname' before initialization
//   var name = "Lydia";
//   let age = 21;
//   const surname = 21;
// }

// sayHi();

///////////////////////////////////////////////////////////////
//2
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// 3
// 3
// 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
// 0
// 1
// 2

/////////////////////////////////////////////////////////////////
//3
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); //NaN

////////////////////////////////////////////////////////////////////
//4
// console.log(+true); //1
// console.log(!"Lydia"); //false

////////////////////////////////////////////////////////////////////
//5

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

// //console.log(mouse.bird.size); //TypeError
// console.log(mouse[bird.size]); //true
// console.log(mouse[bird["size"]]); //true

///////////////////////////////////////////////////////////////////
//6
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); //Hello;

//////////////////////////////////////////////////////////////////
//7
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); //true
// console.log(a === b); //false
// console.log(b === c); //false

///////////////////////////////////////////////////////////////////
//8

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));//TypeError: freddie.colorChange is not a function

/////////////////////////////////////////////////////////////////////////
//9
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign); //{}

///////////////////////////////////////////////////////////////////////////
//10

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";
// // Nothing, this is totally fine!
/////////////////////////////////////////////////////////////////////////////
//11
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName()); //TypeError: member.getFullName is not a function

//........................................................................................

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(Person.getFullName()); //undefined undefined

//.................................................................................

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName()); //Lydia Hallie

////////////////////////////////////////////////////////////////////////////////////////////////
//12
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia); //Person { firstName: 'Lydia', lastName: 'Hallie' }
// console.log(sarah); //undefined

//////////////////////////////////////////////////////////////////////////////////////////////////
//13
// 13. What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling

//answer:D
// During the capturing phase, the event goes through the ancestor elements down to the target element.
//  It then reaches the target element, and bubbling begins.

////////////////////////////////////////////////////////////////////////////////////////////////
// 14. All object have prototypes.
// A: true
// B: false
// Answer
// Answer: B

//////////////////////////////////////////////////////////////////////////////////////////
//15
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, "2")); //"12"
//////////////////////////////////////////////////////////////////////////
//16

// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

//////////////////////////////////////////////////////////////////////////////////////////////////
//17
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }
// const person = "Lydia";
// const age = 21;
// getPersonInfo`${person} is ${age} years old`;
// // [ '', ' is ', ' years old' ]
// // Lydia
// // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////

//19
// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are an adult!");
//   } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }
// checkAge({ age: 18 }); //Hmm.. You don't have an age I guess

//////////////////////////////////////////////////////////////////////////////////////////
//20

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age); //ReferenceError: age is not defined
// }
// getAge();
//////////////////////////////////////////////////////////////////////////////////////
//21
// const sum = eval("10*10+5");
// console.log(sum);

////////////////////////////////////////////////////////////////////////////////////////
//22
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");
// bar();
// foo();
// baz();
// First;
// Third;
// Second;

///////////////////////////////////////////////////////////////////////////////////////////
//23

// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi()); //number
////////////////////////////////////////////////////////////////////////////////////////
//24
// console.log(typeof typeof 1);//str
///////////////////////////////////////////////////////////////////////////////////////
//25
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers); //[ 1, 2, 3, <7 empty items>, 11 ]

////////////////////////////////////////////////////////////////////////////////////////
//26
// setInterval(() => console.log("Hi"), 1000);

//////////////////////////////////////////////////////////////////////////////////////
//27
//console.log([..."Lydia"]); //[ 'L', 'y', 'd', 'i', 'a' ]
///////////////////////////////////////////////////////////////////////////////////////
//28
// const person = { name: "Lydia", age: 21 };
// for (const item in person) {
//   console.log(item);
// }
// //name
// //age
////////////////////////////////////////////////////////////////////////////////////////
//29
// console.log(3 + 4 + "5");//75
///////////////////////////////////////////////////////////////////////////////////////
//30
// const num = parseInt("7*6", 10);
// console.log(num); //7
////////////////////////////////////////////////////////////////////////////////////////
//31
// [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(
//   [1, 2, 3].map((num) => {
//     if (typeof num === "number") return;
//     return num * 2;
//   })
// ); //[ undefined, undefined, undefined ]
// //......................................................................................
// console.log(
//   [1, 2, 3].map((num) => {
//     if (typeof num === "number");
//     return num * 2;
//   })
// ); //[ 2, 4, 6]
///////////////////////////////////////////////////////////////////////////////////////////
// const a = 10;

// console.log(this.b);

let randomNumber = 23;

console.log(!typeof randomNumber === "string");
console.log(!typeof randomNumber);
