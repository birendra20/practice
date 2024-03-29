//forEach
// const number = [1, 2, 3, 4, 5];
// number.forEach((element) => {
//   console.log(element);
// });

// 1
// 2
// 3
// 4
// 5
//=================================================================================
// map
// const number = [1, 2, 3, 4, 5];

// let double = number.map((item) => {
//   return item * 2;
// });

// console.log(double);//[ 2, 4, 6, 8, 10 ]

// let product = [
//   { name: "product1", price: 25, qty: 1 },
//   { name: "product2", price: 30, qty: 4 },
//   { name: "product3", price: 35, qty: 2 },
//   { name: "product4", price: 45, qty: 1 },
// ];

// totalPrice = product.map((item) => ({
//   name: item.name,
//   totalValue: item.price * item.qty,
// }));
// console.log(totalPrice);
//output
// [
//     { name: 'product1', totalValue: 25 },
//     { name: 'product2', totalValue: 120 },
//     { name: 'product3', totalValue: 70 },
//     { name: 'product4', totalValue: 45 }
//   ]
//==============================================================================================

//filter
// const number = [1, 2, 3, 4, 5];

// const even = number.filter((value) => {
//   return value % 2 == 0;
// });

// console.log(even);

// const people = [
//   { name: "alok", age: 24 },
//   { name: "birendra", age: 27 },
//   { name: "c", age: 14 },
//   { name: "yogesh", age: 18 },
// ];

// adult = people.filter((person) => {
//   return person.age >= 18;
// });
// console.log(adult);

//////////////////////////////////////////////////////////////////////////

//reduce

// const number = [1, 2, 3, 4, 5];

// let sum = number.reduce((acc, value) => {
//   return acc + value;
// }, 10);

// console.log(sum);

////////////////////////////////////////////////////////////////

// //slice

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// const numbers = [1, 2, 3, 4, 5, 6];

// const copiedNumbers = numbers.slice(0);
// const first3 = numbers.slice(0, 3);
// const last3 = numbers.slice(-3);
// const mid = numbers.splice(1, 2);

// console.log(copiedNumbers);//[ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers);
// console.log(first3);//[ 1, 2, 3 ]

// console.log(last3);
// console.log(mid);
// console.clear();

//===========================================================================================================

//splice

// splice() JS Array Method. The splice() method is a built-in method for JavaScript Array objects.
// It lets you change the content of your array by removing or replacing existing elements with new ones.
//  This method modifies the original array and returns the removed elements as a new array

// const numbers = [1, 2, 3, 4, 5];

// const deleted = numbers.splice(2, 3, 45);
// console.log(deleted);
// console.log(numbers);

////////////////////////////////////////////////////////////////////////
//concat
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log(c);

/////////////////////////////////////////////////////////////////
//fill
const numbers = [1, 2, 3, 4, 5, 6, 4];
numbers.fill(0, 1, 5);
console.log(numbers);
//output
// [1, 0, 0, 0, 0, 6, 4];

///////////////////////////////////////////////////////////////
// //includes
// const str = ["a", "d"];
// console.log(str.includes("a"));

//=============================================================

//indexof

// let arr = [25, 56, 4, 565, 6, 5, 5, 5, 2, 55, 4, 1, 5];
// console.log(arr.indexOf(5));//return 1st index

//lastindexof

// let arr = [25, 56, 4, 565, 6, 5, 5, 5, 2, 55, 4, 1, 5];
// console.log(arr.lastIndexOf(5)); //return last index

//==============================================================
//every
// let arr = [25, 56, 4, 565, 6, 5, 5, 5, 2, 55, 4, 1, 5];

// let res = arr.every((item) => {
//   return item > 0;
// });

// console.log(res);

//===========================================================
