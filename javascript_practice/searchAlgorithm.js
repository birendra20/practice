// Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.
//Based on the type of search operation, these algorithms are generally classified into two categories:

// Sequential Search: In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.

// Interval Search: These algorithms are specifically designed for searching in sorted data-structures.
// These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search.

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
