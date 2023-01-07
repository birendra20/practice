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
// number of duplicates in an array
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

// var moveZeroes = function(nums) {

//     if(nums.length==0 || nums.length==1)
//         return;

//     let left =0;
//     let right=0;
//     let temp;
//     while(right<nums.length) {
//         if(nums[right] ==0) {
//             right++;
//         }
//         else {
//             // temp = nums[right];
//             // nums[right]=nums[left]
//             // nums[left]=temp;

//             swap(nums,left,right)
//             left++
//             right++

//         }

//     }
//     };
//      function swap(arr,element1, element2){
//          return [arr[element1], arr[element2]] = [arr[element2], arr[element1]];

//      }
//     //283. Move Zeroes

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
//The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halve;

//********************************************************************************************** */
// var twoSum = function(nums, target) {
//     result =[];
//      for(i = 0;i<nums.length;i++){
//           for(j = i+1;j<nums.length;j++){
//               if(target==nums[i]+nums[j]){
//                   //return[i,j];
//                   result.push(i,j)
//               }

//           }
//      }
//  return result;
//  };

//**************************************************************************************************** */

// JavaScript is a dynamic programming language that's used for web development, in web applications, for game development,
//and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
//supports Math calculations, allows you to dynamically add HTML contents to the DOM, creates dynamic style declarations,
//fetches contents from another website, and lots more.

//************************************************************************************************************* */

// Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.
//Based on the type of search operation, these algorithms are generally classified into two categories:

// Sequential Search: In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.

// Interval Search: These algorithms are specifically designed for searching in sorted data-structures.
// These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure
// and divide the search space in half. For Example: Binary Search.

// LINEAR SEARCH

// Assume that item is in an array in random order and we have to find an item.
//Then the only way to search for a target item is, to begin with, the first position and compare it to the target.
//If the item is at the same, we will return the position of the current item. Otherwise, we will move to the next position.
// If we arrive at the last position of an array and still can not find the target, we return -1.
//This is called the Linear search or Sequential search.

// Below is the code syntax for the linear search.

// let arr = [1, 2, 5, 6, 5, 8, 8, 4, 7, 4];

// function linearSearch(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == k) {
//       return i;
//     }
//   }
// }
// console.log(linearSearch(arr, 8));
//**************************************************************************** */
//BINARY SEARCH

// In a binary search, however, cut down your search to half as soon as you find the middle of a sorted list.
//The middle element is looked at to check if it is greater than or less than the value to be searched.
// Accordingly, a search is done to either half of the given list

// Below is the code syntax for the binary search.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binaryS(arr, k) {
//   let start = 0;
//   end = arr.length - 1;
//   while (start <= end) {
//     var mid = start + Math.floor((end - start) / 2);
//     if (k == arr[mid]) {
//       return mid;
//     } else if (k < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return -1;
// }
// console.log(binaryS(arr, 10));
//************************************************************************************* */

// const arr = [11, 2, 44, 7, 7, 6, 25, 19, 47, 10, 47, 45, 45];

// function SecondLargestNumber(arr) {
//   let largest = -Infinity;
//   let secondLarge = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLarge = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLarge) {
//       secondLarge = arr[i];
//     }
//   }
//   return secondLarge;
// }

// console.log(SecondLargestNumber(arr));

// arr.sort(function (a, b) {
//   return a - b;
// });

// let unq = [...new Set(arr)];
// console.log(unq[unq.length - 2]);
// // console.log(arr);
// // console.log(arr[arr.length - 2]);

//***************************************************************************** */
// let arr = [0, 1, 0, 3, 12];

// var moveZeroes = function (arr) {
//   let zeros = [];
//   et nonZeros = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       zeros.push(arr[i]);
//     } else {
//       nonZeros.push(arr[i]);
//     }
//   }
//   let newArr = [...nonZeros, ...zeros];
//   //let newArr = nonZeros.concat(zeros);
//   return newArr;
// };
// console.log(moveZeroes(arr));l

// let x = "10";
// let y = +x;

// console.log(typeof y);
// let arr = ["a", "b"];
// let res = arr.shift();
// console.log(res);
//..........................................................................
//let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let newArr = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] !== nums[i + 1]) {
//     newArr.push(nums[i]);
//   }
// }
// console.log(newArr);
// function removeDup(nums) {
//   let i = 0;
//   let j = 1;

//   while (j < nums.length) {
//     if (nums[i] === nums[j]) {
//       nums.splice(j, 1);
//       // no need to increment here since an item has been removed from the array it will shift over
//     } else {
//       i++;
//       j++;
//     }
//   }
//   return nums;
// }
// console.log(removeDup(nums));

// let unique = [...new Set(nums)];
// console.log(unique);

//...................................................

// One of the best and most performant shuffling algorithms is the "Fisher-Yates Shuffle" algorithm it's way better than we used the sorting trick to shuffle for like array.sort((a, b) => 0.5 - Math.random()).

// This works for a rough-and-ready approach but might not give you a truly random shuffle so clearly, Fisher-Yates Shuffle is the better choice for a couple of good reasons:

// 1 - It’s unbiased

// 2 - It uses constant, or O(1) space, because it performs its swaps in
// place

// 3 - It uses linear, or O(N) time, because it only needs to shuffle each item in the set once.

// 4 - It's so easy to understand.

// Even the loadash function "Shuffle" uses Fisher-Yates Shuffle under the hood.

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

const fisherYatesShuffle = (array = []) => {
  if (array.length <= 1) return array;

  let i = array.length - 1;
  while (i > 0) {
    //random number of length i

    const random = Math.floor(Math.random() * (i + 1));
    //swapping the random number with i

    [array[i], array[random]] = [array[random], array[i]];
    i--;
  }
  return array;
};

console.log(fisherYatesShuffle(array));
["I", "K", "E", "H", "F", "A", "D", "J", "G", "B", "C"];
