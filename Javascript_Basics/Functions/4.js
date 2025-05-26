//This and arrow functions 

const user = {
    username:  "saurabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage(); //saurabh, welcome to the website
// user.username = "sam";
// user.welcomeMessage(); //sam, welcome to the website
// console.log(this);   


// function chai() {
//     let username = "saurabh";
//     console.log(this);
// }
// chai();

//Arrow function 
const chai = () =>{
    let username = "saurabh";
    console.log(this);
}
chai(); //{}


const addtwo = (a, b) => {
    return a + b;
}
console.log(addtwo(2, 3)); //5

//implicit return 
const addthree = (a, b) => a + b;
console.log(addthree(2, 3)); //5

const myArr = [2, 5, 3, 7, 8];
myArr.forEach((num) =>{
    console.log(num);
})