//1) REVERSE A STRING

//a. Reverse a String With Built-In Functions
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

//
//2. Reverse a String With a Decrementing For Loop
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("hello biru"));

//3. Reverse a String With Recursion

// function reverseString(str) {
//   if (str === "")
//     // This is the terminal case that will end the recursion
//     return "";
//   else return reverseString(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("hello"));

//************************************************************************************************************************
//function detectPalindrome(num){
//write code here
//  let revString=[]
// for(let i=num.length-1;i>=0;i--){
//     revString.push(num[i])

// }

// let revString = num.split("").reverse().join("")

// if(num==revString){
//     console.log("Yes")
// }else{
//     console.log("No")
// }
//  }

//  let flag=true;
//  let n=num.length
//  for(let i=0;i<num.length/2;i++){
//      if(num[i]!==num[n-1-i]){
//          flag=false
//      }
//  }
//  if(flag==true){
//      console.log("Yes")
//  }else{
//      console.log("No")
//  }
// }

//***************************************************************************************************** */
//number of duplicates in an array
// arr = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "d",
//   "e",
//   "a",
//   "b",
//   "c",
//   "f",
//   "g",
//   "h",
//   "h",
//   "h",
//   "e",
//   "a",
// ];
// // var map = new Object();
// let map = {};

// for (var i = 0; i < arr.length; i++) {
//   if (map[arr[i]] == undefined) {
//     map[arr[i]] = 1;
//   } else {
//     map[arr[i]]++;
//   }
// }

// for (key in map) {
//   if (map[key] > 1) {
//     console.log(key, map[key]);
//   }
// }
//******************************************************************************************* */
//Coding questions on maximum sum of sub array of length n

// let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// // let k = 3;

// function takeOutMax(arr, k) {
//   let maxSum = 0;
//   let sum = 0;

//   for (let i = 0; i < k; i++) {
//     sum = sum + arr[i];
//   }

//   maxSum = Math.max(sum, maxSum);

//   for (i = k; i < arr.length; i++) {
//     sum = sum - arr[i - k] + arr[i];
//     maxSum = Math.max(sum, maxSum);
//   }
//   return maxSum;
// }

// console.log(takeOutMax(arr, 4));

//**************************************************************************************** */

//check if the given number is a prime number.

// function checkPrime(num) {
//   let factor = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       factor++;
//     }
//   }
//   if (factor == 2) {
//     console.log(num, "is prime");
//   } else {
//     console.log(num, "is not a prime number");
//   }
// }
// checkPrime(17);

///primeSum

// function primeSum(num) {
//   let sum = 0;
//   for (let x = 2; x <= num; x++) {
//     let factor = 0;

//     for (let i = 1; i <= x; i++) {
//       if (x % i == 0) {
//         factor++;
//       }
//     }

//     if (factor == 2) {
//       sum = sum + x;
//     }
//   }
//   console.log(sum);
// }

// primeSum(4);
//

//Create a function which multiply1 two numbers without using * operator or loop?
// function multiply1(num1, num2) {
//   // If second number is zero then the product is zero.

//   if (num2 == 0) {
//     return 0;
//   } else if (num2 > 0) {
//     // Add first num, until second num is equal to zero.
//     return num1 + multiply1(num1, num2 - 1);
//   } else if (num2 < 0) {
//     return -multiply1(num1, -num2);
//   }
// }

// console.log(multiply1(2, -3));

//********************************************************************************* */

// var arr = [1, 2, 4, 8, 10, 12];
// Array.prototype.myMap = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i]));
//   }
//   return result;
// };

// arr2 = arr.map(function (item) {
//   return item * 5;
// });

// console.log(arr2);

//***************************************************************************** */****** */
// var isAnagram = function (s, t) {
//   return s.split("").sort().join("") == t.split("").sort().join("");
// };

//************************************************************************************** */

// function smallestAndLargestOfAll(n, arr){
//   //write code here
//   let min=Infinity;
//   let max=-Infinity

//   for(let i=0;i<arr.length;i++){
//       if(arr[i]<min){
//           min=arr[i]
//       } if(arr[i]>max){
//           max=arr[i]
//       }
//   }
//   console.log(min);
//   console.log(max)
// }

//********************************************************************************************** */

// var moveZeroes = function (nums) {
//   let idxForNonZero = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[idxForNonZero], nums[i]] = [nums[i], nums[idxForNonZero]];
//       idxForNonZero++;
//     }
//   }
//   return nums;
// Time Complexity: O(n)
// Space Complexity: O(1)
//};
//283. Move Zeroes

//****************************************************************************************************************** */
// A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type,
//until these become simple enough to be solved directly.
//The solutions to the sub-problems are then combined to give a solution to the original problem

// Divide And Conquer
// This technique can be divided into the following three parts:

// Divide: This involves dividing the problem into smaller sub-problems.
// Conquer: Solve sub-problems by calling recursively until solved.
// Combine: Combine the sub-problems to get the final solution of the whole problem.

// The following are some standard algorithms that follow Divide and Conquer algorithm.

// Quicksort is a sorting algorithm.
//The algorithm picks a pivot element and rearranges the array elements ,
//so that all elements smaller than the picked pivot element move to the left side of the pivot,
//and all greater elements move to the right side.
//Finally, the algorithm recursively sorts the subarrays on the left and right of the pivot element.

// Merge Sort is also a sorting algorithm.
//The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halve
