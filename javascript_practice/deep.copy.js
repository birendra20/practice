//A deep copy of an object is a copy whose properties do not share the same references
//(point to the same underlying values) as those of the source object from which the copy was made.
//As a result, when you change either the source or the copy,
//you can be assured you're not causing the other object to change too;
// that is, you won't unintentionally be causing changes to the source or copy that you don't expect.

// lodash library method
//- JSON.parse() && JSON.stringfy() method
//- manual (custom) method for deep copy

// deep copying of Object

//1)JSON.stringify

//but it does not work with Dates,functions,undefined,Infinity,RegExps,
//maps,Sets,Blobs,FilesLists,ImagesData,and other complex data types.

// let originalValue = {
//   name: "john",
//   age: 20,
//   //   getName: function () { // this method does not work with function
//   //     return this.name;
//   //   },
// };

// let copiedValue = JSON.parse(JSON.stringify(originalValue));

// // console.log(originalValue); //{ name: 'john', age: 20 }
// // console.log(copiedValue); //{ name: 'john', age: 20 }

// copiedValue.name = "peter";
// console.log(originalValue); //{ name: 'john', age: 20 }
// console.log(copiedValue); //{ name: 'peter', age: 20 }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2) manual deep copy

const deepCopyFn = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  //Create an array or object to hold the values
  let newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    //recursive call for nested objects and arrays
    newObj[key] = deepCopyFn(value);
  }
  return newObj;
};

// const obj1 = {
//   name: "Anuj",
//   rollNo: 7,
//   details: {
//     subject: "React"
//   }
// };

// const obj2 = deepCopyFn(obj1);
// console.log(obj1, obj2);
// obj2.rollNo = 10;
// console.log(obj1, obj2);
// obj2.details.subject = "Javscript";
// console.log(obj1, obj2);

const arr1 = [
  1,
  2,
  3,
  {
    details: {
      subject: "React",
    },
  },
];

const arr2 = deepCopyFn(arr1);
console.log(arr1, arr2);
arr2[3].details.subject = "Javascript";
console.log(arr1, arr2);

//3lodash library method
