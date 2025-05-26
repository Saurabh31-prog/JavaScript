// destructuring
const course = {
    coursename:  "js in hindi",
    price: "999",
    courseteacher: "him"
}

//course.courseteacher, course.price 
//another way of accessing the properties of an object Called Destructuring

const {courseteacher, price, coursename} = course
console.log(courseteacher);
console.log(price);
console.log(coursename);


// API
