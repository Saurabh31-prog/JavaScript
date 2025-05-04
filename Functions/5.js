//Immediately invoked function expressions (IIFE) are functions that are executed immediately after they are defined.


//Named IIFE
(function chai() {
    console.log('db connected');
})(); //db connected 
// this is a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope.

//Unnamed IIFE
( (name) => {
    console.log(`db connected too ${name}`);
})('saurabh')