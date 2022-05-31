// a closure is a combination of a function with reference to its surrounding state.
//in simple word closures gives you access to outer function scope from inner function
// in js , closers are created everytime a function is created,at function creation time.

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
