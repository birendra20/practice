// function multiplyBy2(num) {
//   console.log(num * 2);
// }

// function operationSum(num1, num2, operation) {
//   let sum = num1 + num2;
//   operation(sum);
// }

// operationSum(2, 4, multiplyBy2);

// let passExam = true;

// let parentPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (passExam) {
//       resolve("laptop");
//     } else {
//       reject("nothing");
//     }
//   }, 2000);
// });

// console.log("pending");

// parentPromise.then(function (resolve) {
//   console.log("resolve:", resolve);
// });

// parentPromise.catch(function (reject) {
//   console.log("reject:", reject);
// });

// let name = {
//   firstName: "birendra",
//   lastName: "gupta",
// };

// let printFullName = function (city) {
//   console.log(`i m ${this.firstName} ${this.lastName} from ${city}`);
// };

// printFullName.call(name, "mumbai");
// printFullName.apply(name, ["goa"]);

// let bindMethod = printFullName.bind(name, "thane");
// bindMethod();

// function myName() {
//   let name = "birendra gupta";
//   function displayMyName() {
//     console.log(name);
//   }
//   return displayMyName();
// }
// myName();

////map

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.map(function (el) {
//   return el * 2;
// });

// let arr3 = arr.map((el) => {
//   return el * 3;
// });
// console.log(arr2);
// console.log(arr3);

//filter

// let arr = [45, 35, 65, 4, 5];

// arr1 = arr.filter(function (el) {
//   return el > 40;
// });

// console.log(arr1);

//reduce;

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (acc, cv) {
//   return acc + cv;
// }, 10);

// console.log(sum);
