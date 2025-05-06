/*
const coding = ["js", "ruby", "java", "python"];

coding.forEach( function (item) {
console.log(item);
}) //it is a callback function
//call back functions don't have name 
//forEach method is used to iterate over the elements of an array

//arrow function and forEach
coding.forEach((item) =>{
    console.log(item);
})

//another way

function printMe(item){
    console.log(item);
}
coding.forEach(printMe); //passing function as a parameter


coding.forEach( (item,index, arr) =>{
    console.log(item,index, arr);
})
*/

//----------------------------------------------------------

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    }
    ,
    {
        languageName : "Java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "python"
    }
]

myCoding.forEach( (item) =>{
  console.log(item.languageName);
  console.log(item.languageFile);  
})