// function build(sentenceList) {
//   let root = {};

//   sentenceList.forEach((sentence) => {
//     let base = root;
//     sentence.split(" ").forEach((word) => {
//       if (base[word] == undefined) {
//         base[word] = {};
//       }
//       base = base[word];
//     });
//   });
//   return root;
// }

// console.log(build(["hello world", "hello there"]));//{ hello: { world: {}, there: {} } }

//==============================================================================

// function deleteBlankItems(items) {
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].length == 0) {
//       items.splice(i, 1);
//     }
//   }
//   return items;
// }

// var names = ["Rachel", "", "Meghna", "", "", "Tim"];
// console.log(deleteBlankItems(names));//[ 'Rachel', 'Meghna', '', 'Tim' ]

//===================================================================================

// function fun(a, b) {
//   a += 1;
//   b.push(1);
// }

// const a = 0;
// const b = [];
// fun(a, b);
// console.log(a, b);//0 [ 1 ]

///==========================================================================

//let arr = [-1, 0, 1];
// let arr = [0, -1, -2];
//let arr = [0, 1, 2];
// let arr = [];
// function hasPosNeg(arr) {
//   let hasPos = false;
//   let hasNeg = false;

//   arr.forEach((num) => {
//     hasPos = num > 0;
//     hasNeg = num < 0;
//   });

//   return [hasPos, hasNeg];
// }

// console.log(hasPosNeg(arr));

//=========================================================

// const f = (n) => (n <= 1 ? 1 : n * f(n - 1));
// console.log(f(4));//24

//=====================================================

// const promises = [3, 2, 1].map(
//   (d) =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(d);
//       }, d * 1000);
//     })
// );

// Promise.race(promises).then((val) => {
//   console.log(val); //1
// });

// const arr = [];
// try {
//   arr.push("try");
//   throw new console.error();
// } catch (e) {
//   arr.push("catch");
// } finally {
//   arr.push("finally");
// }
// console.log(arr);

// const myset = new Set();
// myset.add(1);
// myset.add(1);
// myset.add("a");
// myset.add("a");

// console.log(myset.size);
// let x = "fog";

// function first() {
//   console.log(x);
// }
// x = "dog";

// function s() {
//   let x = "log";
//   first();
// }
// s();

// const obj = {
//   prop: 1,
// };

// console.log(obj.prop);

// Object.defineProperty(obj, "prop", {
//   writable: false,
//   value: 2,
// });

// console.log(obj.prop);

// obj.prop = 3;

// console.log(obj.prop);

// function myfuntion(y1, y2, ...y3) {
//   const [x1, ...[result]] = y3;

//   console.log(result);
// }

// const myArray = ["rock", "paper", "scissor", "lizard", "spock"];
// myfuntion(myArray);

// function* gen1(){
//     console.log(yeild 1)
//     console.log(yeild 2)
//     console.log(yeild 3)
// }

// const iterator = gen1()
// const iterator()

// console.log(iterator.next("a").value)
// console.log(iterator.next("b").value)
// console.log(iterator.next("c").value)

// const myQueue = Queue();

// myQueue.enq;
// "use strict";

// async function apiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("b");
//     }, 50);
//   });
// }

// async function logger() {
//   setTimeout(() => console.log("a"), 10);
//   console.log(await apiCall());
//   console.log("c");
// }
// logger();

// const myArray = new Array(2);

// myArray[1] = 1;
// myArray[3] = 3;

// console.log("lngth", myArray.length);
// console.log("elements");

// for (const element of myArray) {
//   console.log("\t", element);
// }

const socket = new WebSocket("wss://example.org");

function mes(event) {
  console.log(event.data);
}
