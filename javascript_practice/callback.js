// a callback function is a function that will be executed once the another function gets executed.
//function that are used as an argument to another function are called callback function

function divideByHalf(num) {
  console.log(Math.floor(num / 2));
}

function double(num) {
  console.log(num * 2);
}

function operationSum(num1, num2, operation) {
  let sum = num1 + num2;
  operation(sum);
}

operationSum(4, 10, divideByHalf);
operationSum(4, 10, double);
