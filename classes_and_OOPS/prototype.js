// ================= PROTOTYPE & INHERITANCE NOTES =================

// 🧠 Goal: Understand how prototype-based inheritance works in JavaScript

// ✅ Example 1: Object and Method Definition
let myheros = ['thor', 'spiderman'];

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    // Object Method using 'this'
    getSpiderPower: function () {
        console.log(`spiderman power is ${this.spiderman}`);
    }
};

// ✅ Custom Method Added to Object.prototype
Object.prototype.saurabh = function () {
    console.log("saurabh is present in all objects");
};

// ✅ Custom Method Added to Array.prototype
Array.prototype.heySaurabh = function () {
    console.log("saurabh says hello");
};

// ====================================================================
// 📌 Usage and Output

myheros.saurabh();      // ✅ Works: Arrays inherit from Object
myheros.heySaurabh();   // ✅ Works: Only Arrays have this method

// heropower.heySaurabh(); // ❌ Error: Object doesn't inherit from Array
// heropower.saurabh();    // ✅ Works: All objects inherit from Object

// ====================================================================
// 🔍 Key Concepts:

// 🔹 Object.prototype
// - All objects inherit from Object
// - Adding methods to Object.prototype affects all objects globally

// 🔹 Array.prototype
// - Only arrays inherit from Array
// - Adding custom methods here makes them available on any array

// 🔹 Prototype Chain
// - JavaScript looks up properties/methods through the prototype chain
// - Example: myheros -> Array -> Object -> null

// 🔹 Method Resolution
// - If a property/method isn’t found directly on the object, JS checks its prototype

// ====================================================================
// ⚠️ Best Practice Warning:

// ❌ Avoid modifying Object.prototype or Array.prototype in production code
// - Can cause conflicts with other libraries or built-in behavior
// - Useful for learning and debugging only

// ====================================================================
// 🧪 Summary:

// - You're learning prototype inheritance
// - You created custom global methods using prototypes
// - You explored how different types (Object, Array) access or miss certain methods


// ====================================================================
//practice

//1. Add trueLength() method to all strings 

String.prototype.trueLength = function() {
    return this.trim().length;
}
let myName = "saurabh    "
console.log(myName.trueLength()) //output : 7




//2. Add firstAndLast() Method to Arrays

Array.prototype.firstAndLast = function() {
    if(this.length === 0) {
        console.log('array is empty')
        return;
    }
    console.log(`first: ${this[0]}, last: ${this[this.length-1]}`);
}
let fruits = ['apple', 'banana','orange', 'kiwi'];
fruits.firstAndLast();  //first: apple, last: kiwi

//3.  Inheritance : animal -> dog
function Animal(name)
 {
    this.name = name;
 }

 Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`)
 }
 function Dog(name)
 {
    Animal.call(this, name) //inherit properties
 }

 Dog.prototype = Object.create(Animal.prototype); //inherit methods
 Dog.prototype.constructor = Dog; //fix constructor reference

 Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
    
 }
 const dog1 = new Dog("tommmy");
 dog1.speak();
 dog1.bark();


// ====================================================================
// ==================== PROTOTYPAL INHERITANCE PRACTICE ====================

// ✅ Base Object
const user = {
    name: "chai",
    email: "chai@gmail.com"
};

// ✅ Another object that "inherits" from user
const teacher = {
    makeVideo: true
};

// ✅ Supporting object (intermediate level in the chain)
const teachingsupport = {
    isAvailable: false
};

// ✅ Another object inheriting from teachingsupport (legacy syntax)
const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: teachingsupport // legacy way of inheritance
};

// ✅ Now set 'user' as the prototype of 'teacher'
teacher.__proto__ = user; // old way (still works, but not preferred)

// ✅ Modern way: set 'teacher' as prototype of 'teachingsupport'
Object.setPrototypeOf(teachingsupport, teacher);

// 🔁 Prototype Chain Example:
// TAsupport -> teachingsupport -> teacher -> user

// ====================================================================
// ✅ Extending Native Object: Adding a custom method to String
let anotherUserName = "codingisFun";

// Custom method to calculate true trimmed length
String.prototype.trueLength = function () {
    console.log(`Raw value: ${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

// Usage:
anotherUserName.trueLength(); // Output: True length is: 11
"icetea".trueLength();        // Output: True length is: 6

// ====================================================================
// 🔍 Key Takeaways:

// 1. __proto__ sets the internal prototype of an object (not recommended in modern code)
// 2. Object.setPrototypeOf() is a cleaner, modern way to set inheritance
// 3. Objects inherit up the prototype chain (TAsupport -> teachingsupport -> teacher -> user)
// 4. You extended String.prototype to add a custom method (trueLength)
// 5. Be careful when modifying global prototypes like String, Array, Object in real-world apps

// ====================================================================


//more practice

const grandParent = {
    surname: "sharma"
}

const parent = {
    __proto__: grandParent,
    eyecolor: "brown"
}

const child = {
    __proto__: parent,
    name: "karan"
}

console.log(child.eyecolor + child.surname); //brownsharma


//3 
Object.prototype.sayHello = function () {
    console.log(`Hello ${this.name} from every object!`);
};

const student = { name: "Aman" };
const teache9r = { subject: "Maths" };

student.sayHello(); // Works
teacher.sayHello(); // Works

