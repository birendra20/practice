//currying is a process in functional programming in which we can transform a function with multiple arguments into a
//sequence of nesting function.
//in other word ,when a function ,instead of taking all arguments at one time ,takes the 1st argument and return a new function
//that takes the second one and return a new function and so on until all arguments have been fulfilled.

//curring helps to avoid passing same variable again and again
// it helps to create higher order function.

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2, 3));

// function sum(a) {
//   return function sum(b) {
//     return function sum(c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

const sum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(sum(1)(2)(4));
