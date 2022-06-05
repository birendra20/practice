const array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11]];

// console.log(array.reduce((acc, val) => acc.concat(val), []));

// console.log(array.flat(1));

const flatten = (arr) => {
  let newArr = arr.reduce((acc, item) => {
    //if the item is an array
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      //if the item is a number
      acc.push(item);
    }
    return acc;
  }, []); //initial state of an acc is [](empty array)
  return newArr;
};
console.log(flatten(array));
