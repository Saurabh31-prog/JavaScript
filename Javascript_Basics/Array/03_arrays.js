/*
Searching & Checking
includes() – Check if a value exists.

indexOf() – First index of a given element.

lastIndexOf() – Last index of a given element.
*/ 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//includes method
console.log(numbers.includes(5)); // true

//indexOf method
const num = numbers.indexOf(4);
console.log(num); //3

//lastIndexOf method
const lastNum = numbers.lastIndexOf(10);
console.log(lastNum);    //9

//find method
const found = numbers.find((num) =>{
     return num > 5;
})
console.log(found); // 6


/*
Sorting & Reversing
sort() – Sort the array in-place.

reverse() – Reverse the array in-place.
*/

// Sorting & Reversing
const fruits = ["banana", "apple", "orange", "kiwi"];
const nums = [10, 5, 3, 8, 1];

// sort method
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'kiwi', 'orange']
nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 5, 8, 10]

// reverse method
fruits.reverse();
console.log(fruits); // ['orange', 'kiwi', 'banana', 'apple']
console.log(fruits[0].split('').reverse().join('')); // 'egnarO'

// Reverse the nums array
nums.reverse();
console.log(nums); // [10, 8, 5, 3, 1]


// Reverse the nums array and join as a string
const reversedNumsString = nums.reverse().join('');
console.log(reversedNumsString); // '1,3,5,8,10'