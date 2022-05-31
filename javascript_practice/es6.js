// for of loop
//iterating over array

// let letters = ["a", "b", "c", "d", "e", "f"];

// for (let letter of letters) {
//   console.log(letter);
// }
//..................................................................
// iterating over string
// let string = "hello world";

// for (let char of string) {
//   console.log(char);
// }

//...............................................................
//template literals;

// let str = `The quick brown fox
//  jumps over   the lazy dogs
// `;

// console.log(str);

//sting  with embed variables;

// let a = 10;
// let b = 20;

// let result = `the sum of ${a} and ${b} is ${a + b}`;

// console.log(result);

//..................................................................

//default values for function  parameters

// function sayHello(name = "world") {
//   return `hello ${name}`;
// }

// console.log(sayHello("fdaksjh"));

// old or es5;

// function sayHello(name) {
//   var name = name || "world";

//   return "hello " + name;
// }

// console.log(sayHello("fdaksjh"));

//................................................................

//functional expression

// var sum = function (a, b) {
//   return a + b;
// };

//arrow function;

// var sum = (a, b) => {
//   return a + b;
// };

//......................arrow function..........................................

//_____single parameter,single statement____;

// var greet = (name) => "hi " + name;
// console.log(greet("peter"));

//_____multiple  parameter,single statement____;

// var multiply = (x, y) => x * y;

// console.log(multiply(3, 7));

//_____single  parameter,multiple statement____;

// let test = (age) => {
//   if (age > 18) {
//     return "adult";
//   } else {
//     return "teen";
//   }
// };
// console.log(test(17));

//_______multiple  parameter,multiple statement____;

// var divide = (x, y) => {
//   if (y != 0) {
//     return x / y;
//   }
// };
// console.log(divide(20, 6));

//______no parameter,single statement

// var hello = () => "hello word";

// console.log(hello());

//.......................................REST parameters........

// function sortNames(...names) {
//   return names.sort();
// }

// console.log(sortNames("alok", "yogesh", "duwesh", "birendra"));

// function myFunction(a, b, ...args) {
//   return args;
// }

// console.log(myFunction(1, 2, 3, 4, 5));

//........................SPREAD operator......

// function addNumber(a, b, c) {
//   return a + b + c;
// }
// let numbers = [15, 12, 8];

// console.log(addNumber.apply(null, numbers)); //ES5

// console.log(addNumber(...numbers)); //ES6

// .....

// let pets = ["cat", "dog", "parrot"];

// let bugs = ["ants,bee"];

// let animals = [...pets, "tiger", "wolf", ...bugs];

// console.log(animals);

//.............destructuring in js...................................................

//>>>>>>>>>>>>>array destructuring<<<<<<<<<<<<<<<<<

//es5
// var fruits = ["apple", "banana"];
// var a = fruits[0];
// var b = fruits[1];

// console.log(a);
// console.log(b);

//es6

// let fruits = ["APPLE", "BANANA"];

// let [a, b] = fruits;

// console.log(a, b);

//.......using REST operators

// let fruits = ["apple", "banana", "mango"];
// let [a, ...r] = fruits;
// console.log(a); //apple
// console.log(r); //[ 'banana', 'mango' ]
// console.log(Array.isArray(r)); //true

//>>>>>>>>>>>>>object destructuring<<<<<<<<<<<<<<<<<

// ES5
// var person = { name: "peter", age: 28 };

// var name = person.name;
// var age = person.age;

// console.log(name);
// console.log(age);

//ES6

// let person = { name: "peter", age: 28 };

// let { name, age } = person;

// console.log(name);
// console.log(age);

//>>>>>>>>>>>>>>>>>>>>> BIGINT <<<<<<<<<<<<<<

// var bigNum = BigInt("123456789123456789794613");

// console.log(bigNum); //123456789123456789794613n
