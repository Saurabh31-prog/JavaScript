//  practicing constructor functions and the use of .call() to borrow functionality — an essential concept in function-based prototypal inheritance and constructor chaining.

// 🧪 Practicing constructor chaining / function borrowing using .call()

// Step 1: A helper function to set username
function SetUsername(username) {
    this.username = username;
    console.log("called"); // just to show it executes
}

// Step 2: A main constructor to create full user
function createUser(username, email, password) {
    // Borrow the SetUsername constructor to set 'username'
    SetUsername.call(this, username); // manually binds this to the new object

    this.email = email;
    this.password = password;
}

// Step 3: Create a new user using `new` keyword
const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);

// 🔍 Output:
// called
// createUser { username: 'chai', email: 'chai@gmail.com', password: '123' }

// | Concept                            | Explanation                                                                        |
// | ---------------------------------- | ---------------------------------------------------------------------------------- |
// | `this`                             | Refers to the newly created object (`chai`) when using `new createUser()`          |
// | `SetUsername.call(this, username)` | Calls `SetUsername` with `this` bound to the new `createUser` instance             |
// | Constructor Function Composition   | Instead of inheritance, this is **function borrowing** or **constructor chaining** |



//====================================================================

//practice 
function setusername(username)
{
    this.username = username;
}
function SetContact(phone){
    this.phone = phone;
}


function createUser(username, email, password, phone)
{
    setusername.call(this.username);
    setusername.call(this, phone);
    this.email = email;
    this.password = password
}

const user1 = new createUser("saurabh", "saurabh@gmail.com", "abc","232332");
console.log(user1);


// important 
// ✅ Understanding `this` and `.call()` in Constructor Function Chaining

// STEP 1: Small constructor functions
function SetUsername(username) {
    this.username = username; // 'this' refers to the object we want to modify
}

function SetEmail(email) {
    this.email = email;
}

function SetPassword(password) {
    this.password = password;
}

// STEP 2: Main constructor function that calls all of the above
function createUser(username, email, password) {
    // 🧠 .call(this, arg) means: run the function and set its 'this' to this object
    SetUsername.call(this, username);   // sets this.username
    SetEmail.call(this, email);         // sets this.email
    SetPassword.call(this, password);   // sets this.password
}

// STEP 3: Creating a new user
const user2 = new createUser("hitesh", "hitesh@example.com", "123456");

console.log(user2);

/* 🧾 OUTPUT:
{
  username: 'hitesh',
  email: 'hitesh@example.com',
  password: '123456'
}
*/

/* ✅ EXPLANATION

🔹 Step-by-step breakdown:

1️⃣ `new createUser(...)` does:
   - Creates an empty object: `this = {}`
   - Links the prototype: `this.__proto__ = createUser.prototype`

2️⃣ Inside `createUser`, we do:
   - `SetUsername.call(this, username)` 
     → modifies `this` to include username
   - `SetEmail.call(this, email)`
     → adds email to the same `this`
   - `SetPassword.call(this, password)`
     → adds password

3️⃣ The final object looks like:
{
  username: 'hitesh',
  email: 'hitesh@example.com',
  password: '123456'
}

4️⃣ JavaScript returns `this` from the `new` keyword automatically.

🔹 So `this` keeps getting passed and used inside each function.

🔹 `.call()` forces the called function to use the given `this` (the current object).

💡 Think of `.call(this, arg)` like:
   "Hey function, don’t make your own object — use *my* object and add stuff to it."

*/
