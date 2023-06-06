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

//.......
// working ...
/*
Sure, let me explain this line of code:

javascript
Copy code
const updatedGroup = JSON.parse(JSON.stringify(props.group));
This line creates a deep copy of the props.group object and assigns it to a new variable called updatedGroup.

Here's what's happening in more detail:

JSON.stringify(props.group) creates a JSON string representation of the props.group object.
JSON.parse() then takes this JSON string and creates a new JavaScript object from it, effectively making a deep copy of the original props.group object.
Why is this a deep copy?

This method works because JSON.stringify() creates a new string that contains a representation of the original object's data, including nested objects and arrays. When we call JSON.parse() on this string, it creates a new object with the same data, again including nested objects and arrays, which is why this is considered a deep copy.

It's worth noting that this approach has some limitations. If the object being copied contains functions or non-enumerable properties, they will be lost in the process. However, in most cases, this is a simple and effective way to create a deep copy of an object.


is there any disadvantegae of using this method as deep copy?
ChatGPT
While JSON.parse(JSON.stringify(object)) is a common method for creating deep copies of objects, it does have some potential drawbacks to consider:

Performance: Creating a string representation of an object and then parsing it to create a copy is not the most efficient way to create a deep copy. This approach can be slow, especially for large or complex objects.

Limited data types: JSON.parse() and JSON.stringify() can handle a limited set of data types. For example, it cannot handle objects that contain circular references or non-enumerable properties.

Function properties: If the object being copied has function properties, those functions will not be included in the copy. The copy will contain only the function's string representation.

Prototype chain: The deep copy created using this method will not include any properties from the object's prototype chain.

Because of these limitations, there may be cases where a different approach to creating a deep copy, such as using a dedicated library or writing a custom function, may be more appropriate. It's important to carefully consider the requirements of your use case and weigh the benefits and drawbacks of different methods before deciding on an approach.

*/

/*
in type script

 function deepCopyFn<T>(obj: T): T {
      if (typeof obj !== "object" || obj === null) {
        return obj;
      }

      if (Array.isArray(obj)) {
        const newArray = obj.map(function (value) {
          return deepCopyFn(value);
        }) as unknown as T[];

        return newArray as unknown as T;
      }

      const newObj = {} as T;
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const value = obj[key];
          newObj[key] = deepCopyFn(value);
        }
      }

      return newObj;
    }

.........................................................
    function deepCopyFn<T>(obj: T): T {
This declares a function called deepCopyFn that takes a generic type T as its argument and returns a value of type T. The <T> syntax indicates that the function is generic over the type T.


  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
This checks if the argument obj is not an object or is null. If this is the case, then the function returns the argument as is, since it cannot be deep copied.


  if (Array.isArray(obj)) {
    const newArray = obj.map(function(value) {
      return deepCopyFn(value);
    }) as unknown as T[];

    return newArray as unknown as T;
  }
This checks if the argument obj is an array. If it is, then it creates a new array called newArray by calling the map function on the original array obj. The map function applies the deepCopyFn function to each element of the original array and returns a new array with the deep copied elements. Finally, the newArray is cast as a generic type T[] and then cast as type T before being returned.


  const newObj = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      newObj[key] = deepCopyFn(value);
    }
  }

  return newObj;
}
This creates a new object called newObj of the same type as the argument obj using a type assertion. It then loops through each key-value pair of the original object obj. If the key is a direct property of the object (i.e., not inherited from a prototype chain), then it deep copies the value associated with the key by calling deepCopyFn and assigns the copied value to the corresponding key in newObj. Finally, newObj is returned.

I hope this explanation is clearer. Let me know if you have any further questions.

*/
