// NORMAL FUNCTION VS CONSTRUCTOR FUNCTION
///////////////////////////////////////////////////////////////////////////

//normal function;
function NikeProduct() {
  let product = {
    name: "shoes",
    price: 1000,
  };
  return product;
}
// let p1 = NikeProduct();
// p1.location = "mumbai";
// console.log("p1", p1);

// let p2 = NikeProduct();
// p2.location = "pune";

// console.log("p2", p2);
let p3 = NikeProduct();
console.log(p3);

//////////////////////////////////////////////////////////////////////////////

//constructor function

// function PumaProduct() {
//   this.user = "pablo";
//   this.Product = "shoes";
//   this.price = 2000;
// }

// let prdct1 = new PumaProduct();
// prdct1.location = "mumbai";
// console.log("prdct1", prdct1);

// prdct1 PumaProduct {
//     user: 'pablo',
//     Product: 'shoes',
//     price: 2000,
//     location: 'mumbai'
//   }

// let prdct2 = new PumaProduct();
// prdct2.location = "pune";
// console.log("prdct2", prdct2);
// prdct2 PumaProduct {
//     user: 'pablo',
//     Product: 'shoes',
//     price: 2000,
//     location: 'pune'
//   }

// let product3 = new PumaProduct();
// console.log(product3);

/////////////////////////////////////////////////////////////////////////////

// create a virtual Newspaper factory publishing using constructor function
// let arr = [];
// function Newspaper(h) {
//   this.date = new Date();
//   this.id = Math.round(Math.random() * 100);
//   this.heading = h;
//   this.publication = "Amar Ujala";
// }

// for (let i = 0; i < 15; i++) {
//   let news1 = new Newspaper("pablo pandey got married");
//   arr.push(news1);
// }

// console.log("news", arr);
