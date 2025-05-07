const myNums = [1, 2, 3, 4];
// const newnums = myNums.map((num) => num + 10);


//method chaining 
const newnums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 11)
console.log(newnums);



