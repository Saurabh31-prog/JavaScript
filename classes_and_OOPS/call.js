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
