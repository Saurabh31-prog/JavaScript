//Promises
/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Description
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/


/*
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography , network calls 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 3000);
})

//first setimeout will execute and then resolve() then lower function will execute
promiseOne.then(function(){
    console.log('promise comsumed');
})

*/

//same code as above but more efficient
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 is resolved")
})

//third promise

const thirdPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username:"code",
            email : "code@gmail.com"
        })
    }, 1000)
})  

thirdPromise.then(function(user){
    console.log(user); //prints the complete object
})


//fourth promise

const fourthpromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "saurabh", password: "123"})
        }else{
            reject('errro: something went wrong');
        }
    }, 1000)
})

fourthpromise.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{
console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() =>{
    console.log("promise is resolved or rejected ")
})


//promise five

const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({
                username: "Saurabh",
                password: "1234"
            })
        }else{
            reject("error: js went wrong"); 
        }
    }, 1000)
});
async function consumePromiseFive() {
    try{const response = await promiseFive
    console.log(response);
    }catch(error) {
        console.log("error")
    }
}
consumePromiseFive()

//-----------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log("error response");
//     }
// }
// getAllUsers();


//same format in .then 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))