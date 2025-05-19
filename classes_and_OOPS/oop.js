// ======================= OBJECTS & CONSTRUCTOR FUNCTION NOTES =======================

// ✅ Object Literal Syntax
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("hello");
        // console.log(`username: ${this.username}`);
        console.log(this); // 'this' refers to the current object
    }
};

// user.getUserDetails(); // Uncomment to see how 'this' works in object literals



// ✅ Constructor Function - Blueprint for creating multiple objects

function User(username, loginCount, isLoggedIn) {
    // 'this' refers to the new object being created
    this.myusername = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        // 'this.username' will be undefined because we stored it in 'this.myusername'
        console.log(`Welcome ${this.username}`); 
    }

    // Implicit return of 'this' (no need to write 'return this')
}

// ✅ Creating instances using 'new'
const userOne = new User("saurabh", 12, true);
const usertwo = new User("hi", 11, false);

// console.log(userOne);
// console.log(usertwo);

// ✅ Checking the constructor
console.log(userOne.constructor); // [Function: User]

// -----------------------------------------------------------------------------------
// 🧠 What happens when 'new User(...)' is called?

// Step 1: A new empty object is created: {}
// Step 2: The constructor function is called with the given arguments
// Step 3: 'this' inside the function refers to the new object
// Step 4: Properties and methods are assigned to the new object
// Step 5: The object is returned implicitly

// Example of built-in constructors:
// const promiseOne = new Promise(...)
// const date = new Date()

// -----------------------------------------------------------------------------------
// 🔍 Key Concepts to Remember

// - 'this' inside object literals refers to the object itself
// - 'this' inside constructor functions refers to the newly created object
// - The 'new' keyword is crucial to creating separate instances
// - Avoid hardcoding property names inside functions (like this.username) unless it exists
// - Methods can be defined inside constructor functions or via prototype for memory efficiency

// -----------------------------------------------------------------------------------
//practice


// 1. create a book constructor

function Book(title, author, year)
{
   this.title = title;
   this.author = author;
   this.year = year;

   this.getSummary = function () {
      console.log(`${this.title} by ${this.author} , published in ${this.year}`)
   };
}

const book1 = new Book("the alchemist", "paulo coelo", 1988);
book1.getSummary();

const book2 = new Book("invisible man", "h g wells", 1881);
book2.getSummary();

//2. Student Constructor

function Student(name, rollNum, marks)
{
   this.name = name;
   this.rollNum = rollNum;
   this.marks = marks;

   this.checkPass = function() {
      if(this.marks >= 40)
      {
         console.log(`${this.name} passed`)
      }else{
         console.log(`${this.name} failed `)
      }
   };
}

const student1 = new Student("ravi", 101, 75);
student1.checkPass();


// 3. Create a Product Constructor with Discount Method

function BankAccount(ownerName, balance)
 {
   this.ownerName = ownerName;
   this.balance = balance;


   this.deposite = function(amount)
    {
      this.balance += amount;
      console.log(`${this.ownerName} deposited $${amount}. New balance is $${this.balance}`);
    };

    this.withdraw = function (amount)
    {
      if(this.balance >= amount)
      {
         this.balance -= amount;
         console.log(`${this.ownerName} withdrew $${amount}. Remaining balance is $${this.balance}`);
         
      }else{
         console.log("insufficient funds");
      }
    };
 }

const acc1 = new BankAccount("Saurabh", 1000);
acc1.deposite(400);
acc1.withdraw(400);
acc1.withdraw(1100);