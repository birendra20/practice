//A shallow copy of an object is a copy whose properties share the same references as those of the source object
//from which the copy was made.
//As a result, when you change either the source or the copy, you may also cause the other object to change too —
//and so, you may end up unintentionally causing changes to the source or copy that you don't expect.
//That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

///////////////////////////////////////////////////////////////////////////////////////////////

// shallowCoping using assignment operator

// let originalValue = {
//   name: "john",
//   age: 20,
// };

// let copiedValue = originalValue;
// console.log(originalValue); //{ name: 'john', age: 20 }
// console.log(copiedValue); //{ name: 'john', age: 20 }

// copiedValue.name = "peter";
// console.log(originalValue); //{ name: 'peter', age: 20 }
// console.log(copiedValue); //{ name: 'peter', age: 20 }

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//spread
// const arr = [1, 2, 3, 4];
// const newArr = [...arr];
// newArr.push(5);
// console.log(newArr);
// console.log(arr);
// // newArr = [1, 2, 3, 4]
///...................................................................................................
//from

// const arr = [1, 2, 3];
// const newArr = Array.from(arr);
// newArr.push(5);
// console.log(newArr);
// console.log(arr);

//...........................................................................................
//slice
// const arr = ["a", "b", "c"];
// const newArr = arr.slice();
// // newArr = ["a", "b", "c"]
////////////////////////////////////////////////////////////////////////////////////////

//..................................................................................

// 2)object.assign(byDefault it gives partial Deep Copy in case of nested objects)

// let originalValue = {
//   name: "john",
//   age: 20,
//   getName: function () {
//     return this.name;
//   },
//   address: {
//     city: "mumbai",
//     country: "India", //it does not work with nested object
//   },
// };

// let copiedValue = Object.assign({}, originalValue);

// console.log(originalValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'mumbai', country: 'India' }
// console.log(copiedValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'mumbai', country: 'India' }

// copiedValue.name = "peter";
// copiedValue.address.city = "Jharkhand";
// console.log(originalValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'Jharkhand', country: 'India' }
// console.log(copiedValue); //{ name: 'peter', age: 20, getName: [Function: getName],address: { city: 'Jharkhand', country: 'India'  }

//.........................................................................................................
//3) spread Operator (byDefault it gives partial Deep Copy in case of nested objects)
// let originalValue = {
//   name: "john",
//   age: 20,
//   getName: function () {
//     return this.name;
//   },
//   address: {
//     city: "mumbai",
//     country: "India", //it gives partial deep copying
//   },
// };

// let copiedValue = { ...originalValue };

// console.log(originalValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'mumbai', country: 'India' }
// console.log(copiedValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'mumbai', country: 'India' }

// copiedValue.name = "peter";
// copiedValue.address.city = "Jharkhand";
// console.log(originalValue); //{ name: 'john', age: 20, getName: [Function: getName],address: { city: 'Jharkhand', country: 'India' }
// console.log(copiedValue); //{ name: 'peter', age: 20, getName: [Function: getName],address: { city: 'Jharkhand', country: 'India'  }///

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let originalValue = {
//   name: "john",
//   age: 20,
//   getName: function () {
//     return this.name;
//   },
//   address: {
//     city: "mumbai",
//     country: "India", //it gives partial deep copying
//   },
// };

// let copiedValue = { ...originalValue };

// copiedValue = {
//   ...copiedValue,
//   name: "birendra",
//   address: {
//     ...copiedValue.address,
//     city: "goa",
//   },
// };

// console.log(originalValue);
// // {
// //     name: 'john',
// //     age: 20,
// //     getName: [Function: getName],
// //     address: { city: 'mumbai', country: 'India' }
// //   }
// console.log(copiedValue);
// // {
// //     name: 'birendra',
// //     age: 20,
// //     getName: [Function: getName],
// //     address: { city: 'goa', country: 'India' }
// //   }
