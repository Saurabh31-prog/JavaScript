//singleton
// Object.create

//object literals

const symbol1 = Symbol("key1");

const jsuser ={
    name : "Saurabh",
    "full name" : "Saurabh Mungle",
    age : 23,
    [symbol1] : "value1",
    location : "India",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]
    
}

/*
//values access inside object
console.log(jsuser);
console.log(jsuser.name);
console.log(jsuser["full name"]);
console.log(jsuser[symbol1]);

Object.freeze(jsuser); // freeze the object
jsuser.name = "Saurabh Mungle"; // not possible to change the value
console.log(jsuser.name); // Saurabh Mungle
*/ 

jsuser.greeting = function() {
    console.log("hello jsuser");
}
console.log(jsuser.greeting());

jsuser.greeting = function() {
    console.log(`hello ${this.name}`);
    console.log(`hello ${this["full name"]}`);
}