///////////////////////////////////////////////////////////////////////////////////////////
//1)inheritance using object.create
//create a cat ecosystem
let cat = {
  type: "cat",
  legs: 4,
  tail: true,
  fur: true,
};

let tiger = Object.create(cat);

//tiger.speed = 60;

console.log(tiger); //{}

//hasOwnProperty
console.log(tiger.hasOwnProperty("speed")); //true
console.log(tiger.hasOwnProperty("legs")); //false

///////////////////////////////////////////////////////////////////////////////////////////
// 2) inheritance using constructor function

//create flipkart shoes product catalogue and add coupan as a prototype method;

// function shoes() {
//   this.brand = "nike";
//   this.seller = "flipkart";
//   this.type = "sports";
// }

// shoes.prototype.coupan = 20;

// let s1 = new shoes();

// console.log("s1", shoes());
