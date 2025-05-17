const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography , network calls 

    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000);
})

promiseOne.then()