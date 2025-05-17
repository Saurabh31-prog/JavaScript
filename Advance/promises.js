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