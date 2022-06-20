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

// console.log(double);

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
// const numbers = [1, 2, 3, 4, 5, 6];

// const copiedNumbers = numbers.slice(0);
// const first3 = numbers.slice(0, 3);
// const last3 = numbers.slice(-3);
// const mid = numbers.splice(1, 2);

// console.log(copiedNumbers);
// console.log(numbers);
// console.log(first3);
// console.log(last3);
// console.log(mid);
// console.clear();
