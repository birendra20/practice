//1. Reverse a String With Built-In Functions
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

//2. Reverse a String With a Decrementing For Loop
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("hello"));

//3. Reverse a String With Recursion

function reverseString(str) {
  if (str === "")
    // This is the terminal case that will end the recursion
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
