//array

/*

🔄 Modification (Mutating)
push() – Add item(s) to the end.

pop() – Remove last item.

unshift() – Add item(s) to the beginning.

shift() – Remove first item.

splice() – Add/remove item(s) at a specific index.

fill() – Fill all/part of an array with a static value.
*/
const myArr = [0, 1, 2, 3, 4, 5];
const stringArr =[ 'hello', 'world'];
const myArr2 = new Array(1, 2, 3, 4, 5);


//new 
const ex = [1, 2, 3, 4, 5];
console.log(ex);
const newex = ex.slice(1, 3); 
const newEx = ex.splice(1, 3);
console.log(newex);
console.log(newEx);
console.log(ex);
const fillarr = ex.fillarr




/*
//Arrays methods

myArr.push(33);  //add element to the array
console.log(myArr);
myArr.pop(3);
console.log(myArr); //remove last element


myArr.unshift(9);
console.log(myArr); //add element to the beginning
myArr.shift();
console.log(myArr); //remove first element

const newArr = myArr.join();

console.log(newArr);
*/



//slice, splice IMPORTANT******

//slice: gets you elements form index (n, m) n to m excluding m. doesn't change the original array 

//splice : gets elements from index(n, m) including both n, m. changes the original array

/*
console.log("a", myArr);

const myn1 = myArr.slice(1, 3); 

console.log(myn1);
console.log("b", myArr);

const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);
*/

//slice vs splice
/*
let arr1 = [0, 1, 2, 3, 4, 5];
const slicedArr = arr1.slice(0, 3);
console.log(slicedArr); // [0, 1, 2]
console.log(arr1); // [0, 1, 2, 3, 4, 5]

const splicedArr = arr1.splice(0, 3);
console.log(splicedArr); // [0, 1, 2]
console.log(arr1); // [3, 4, 5]
*/


//The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.fill(4, 1, 5)); //[ 0, 4, 4, 4, 4, 5 ]

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// The fill() method can also be used to fill an array with a reference to an object


