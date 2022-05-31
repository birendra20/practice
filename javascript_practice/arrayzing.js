// 1 => Create an array
// var meals = ['breakfast', 'lunch', 'dinner'] ;
//...............................................................
// 2 =>Empty an array

// var meals = ["breakfast", "lunch", "dinner"];
// meals.splice(0, meals.length);
// console.log(meals); //[]

// var meals = ["breakfast", "lunch", "dinner"];
// meals.length = 0;
// console.log(meals);//[]
//.................................................................

// 3 Clone an array

// var meals = ["breakfast", "lunch", "dinner"];

// var copy = meals.slice();

// console.log(copy);
// // ['breakfast', 'lunch', 'dinner']

//...............................................................
//Get last item

// var meals = ["breakfast", "lunch", "dinner"];

// meals[meals.length - 1];

// console.log(meals[meals.length - 1]);
// // 'dinner'

// var meals = ["breakfast", "lunch", "dinner"];
// meals.slice(-1)[0];

// console.log(meals.slice(-1)[0]);
// 'dinner'
//.............................................................
//Remove last item
//var meals = ["breakfast", "lunch", "dinner"];

// meals.pop();
// // 'dinner'

// console.log(meals);
// // ['breakfast', 'lunch'];

// meals.splice(-1, 1);
// console.log(meals);
//.................................................

// //Add new item(s) to end
// var meals = ['breakfast', 'lunch', 'dinner'];

// meals.push('supper');
// // 2

// console.log(meals);
// // ['breakfast', 'lunch', 'dinner', 'supper'];

//...................................................

// Overwrite item at a specific index
// var meals = ["breakfast", "lunch", "dinner"];

// meals[1] = "brunch";
// // ['breakfast', 'brunch', 'dinner'];//
//Or;

// var meals = ["breakfast", "lunch", "dinner"];

// meals.splice(1, 1, "brunch");
// console.log(meals);

//...................................................
// //Add new item(s) at a specific index
// var meals = ["breakfast", "lunch", "dinner"];

// meals.splice(1, 0, "brunch", "more brunch");
// // ['breakfast', 'brunch', 'more brunch', 'lunch', 'dinner']

//..............................................

//Remove single item at a specific index
// var meals = ['breakfast', 'lunch', 'dinner'];

// meals.splice(1, 1);
// // ['lunch']

// meals;
// // ['breakfast', 'dinner']

//Remove several items
// var meals = ['breakfast', 'lunch', 'dinner'];

// meals.splice(1, 2);
// // ['lunch', 'dinner']

// meals;
// // ['breakfast']

//...................................................
//Reverse an array
// var meals = ["breakfast", "lunch", "dinner"];

// meals.reverse();
// console.log(meals);
// // ['dinner', 'lunch', 'breakfast'];

//........................................................
// Delimit an array
// var meals = ["breakfast", "lunch", "dinner"];

// console.log(meals.join(" AND "));
// // 'breakfast AND lunch AND dinner

//.........................................................

//Sort in alphabetical order
// var meals = ["dinner", "supper", "breakfast", "lunch"];

// meals.sort();
// console.log(meals);
// // ['breakfast', 'dinner', 'lunch', 'supper']

//.........................................................

// Sort in numerical order
// var numbers = [1438, 2605, 794, 3947, 6241, 11745, 2585];

// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);
// [794,1438,2585,2605,3947,6241,11745]

//......................................................
