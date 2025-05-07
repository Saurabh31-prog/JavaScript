
/*
const coding = ["js", "ruby", "java", "python"];

const values = coding.forEach( (item) =>{
    // console.log(item);
    return item;
})
console.log(values); //undefined

*/

// -------------------------------------------------------------------------------

/*
// Filter 
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not execute the function for empty elements.
// The filter() method returns a new array, without modifying the original array.
// The filter() method can take up to three arguments: the current element, the index of the current element, and the array filter was called upon.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums); // [5, 6, 7, 8, 9, 10]


const newNum1 = myNums.filter((num) =>{num >  4});
console.log(newNum); 
//emty array as output because we are starting a scope with curly braces and not returning anything
// if we want to return something we need to use return keyword

const newNum = myNums.filter((num) =>{ return num > 4});
console.log(newNum); // [5, 6, 7, 8, 9, 10]

const newNum2 = [];
myNums.forEach((num) =>{
    if(num > 4) {
        newNum2.push(num);
    }
});
console.log(newNum2); // [5, 6, 7, 8, 9, 10]

 */

// -------------------------------------------------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((book) => book.genre === 'History');
 //console.log(userBooks);

  userBooks = books.filter((book) => { return book.publish >= 1995 && book.genre === 'History' });
  console.log(userBooks);


