// a closure is a combination of a function bundled together with reference to its surrounding state(lexical environment).
//in simple word closures gives you access to outer function scope from inner function
// in js , closers are created everytime a function is created,at function creation time.

//the closer has three scope chains
//1)it has access to its own scope
//it has access to its outer functions variables
//it has access to the global variables

//and the inner function has access not only to its outer function's variable but it has also access to outer's function parameters

///////////////////////////////////////////////////////////////////////////

// function showMyName() {
//   var name = "birendra gupta";
//   function displayMyName() {
//     console.log(name);
//   }
//   return displayMyName();
// }

// showMyName();

//////////////////////////////////////////////////////////////////////////////

//inner function access to outer fn parameter also

// function showName(firstName, lastName) {
//   let intro = "your name is";

//   function fullName() {
//     console.log(intro, firstName + " " + lastName);
//     // return intro + " " + firstName + " " + lastName;
//   }
//   return fullName();
// }

// showName("birendra", "gupta");

///////////////////////////////////////////////////////////////////////////////

// function createAdding(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// var adding5 = createAdding(5);
// var adding10 = createAdding(10);

// console.log(adding5(2));
// console.log(adding10(2));
/////////////////////////////////////////////////////////////////////////////////////////////////
