const heros = [ "thor", "iroman", "spiderman"];

const dcHeros = ["batman", "superman", "wonderwoman"];


// const allheros = heros.concat(dcHeros);
// console.log(allheros);

// Spread operator
const allheros = [...heros, ...dcHeros];
console.log(allheros);

// flat method
//defination: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realarr = anotherArr.flat(3);
console.log(realarr);

//from method
//defination: The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const str = "hello";
console.log(Array.from(str));

//Array.from() with map
const str2 = "hello";
const strArr = Array.from(str2, (char) => char.toUpperCase());
console.log(strArr); // ['H', 'E', 'L', 'L', 'O']

//Array.of() method
//defination: The Array.of() method creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]


//Array.isArray() method
//defination: The Array.isArray() method determines whether the passed value is an Array.
const arr = [1, 2, 3];
const str3 = "hello";
const obj = { name: "John" };
console.log(Array.isArray(obj)); // false
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(str3)); // false
console.log(Array.isArray("hello")); // false

