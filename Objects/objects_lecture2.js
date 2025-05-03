/*
const tinderUser1 = new Object(); //singleton object
const tinderUser = {};    //not singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "saurabh",
            lastname: "mungle"
        }
    }
}
console.log(regularUser.fullname.userfullname);

*/

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = {3: "c", 4 : "d"}

const obj = {obj1, obj2};
console.log(obj); 


//merging two or more objects
//Object.assing() = static method copies all enumerable properties form one or more source objects to a target object. it returns modified target object.
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//using spread operator.
const obj4 = { ...obj1, ...obj2};
console.log(obj4);


//converting all object keys to string format
//creates an array of string of all the keys and values present inside the objects
const tinderuser = {
    name : "saurabh",
    email : "saurbh@gmail.com",
    id : "22",
    age : "4",
    company : "LIC"
}
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn')); //false
