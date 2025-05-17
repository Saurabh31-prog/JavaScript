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

