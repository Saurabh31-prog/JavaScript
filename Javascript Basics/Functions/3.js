//Global and local scope in javascript

 let a = 300;
if(true) {
let a = 10
const b = 20
var c = 30
console.log(a);
}

console.log(a);
var c = 400;
console.log(c);

//scope level and mini hoisting
function one() {
    const username = "Saurabh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    // two();
}
one();

/*
if(true) {
    const username = "saurabh"
    if(username === "saurabh") {
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website);  error 
}
// console.log(username); error
*/
//------------------------------------------------------------------------------------

//interesting
addone(5);
function addone(value) {
    return value + 1;
} //no error


addtwo(5);
const addtwo = function(value) {
    return value + 2;
}
//error :  Cannot access 'addtwo' before initialization