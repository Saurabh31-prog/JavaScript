// ✅ CLASS INHERITANCE in JavaScript

// Base class / Parent class
class User {
    constructor(username) {
        this.username = username;
    }

    // Method available to all User objects
    logMe() {
        console.log(`username is ${this.username}`);
    }
}

// Child class extends the User class
class Teacher extends User {
    constructor(username, email, password) {
        super(username); // calls the parent class constructor (User)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`new course was added by ${this.username}`);
    }
}

// Creating object from the Teacher class
const obj = new Teacher("saurabh", "saurabh@gmail.com", "123");

// Calling child + inherited methods
obj.addCourse();         // ✅ Child method
console.log(obj.username); // ✅ Inherited property
obj.logMe();             // ✅ Inherited method from User

/* ✅ OUTPUT:
new course was added by saurabh
saurabh
username is saurabh
*/

/* 📚 EXPLANATION:

1️⃣ `class User` is the **base class**. It defines the common property: `username`, and a method `logMe()`.

2️⃣ `class Teacher extends User` is the **derived/child class**.
   - It **inherits** from User using the `extends` keyword.
   - Inside the constructor, we use `super(username)` to call the parent’s constructor and pass the username.

3️⃣ When we do `const obj = new Teacher(...)`, it:
   - Calls `Teacher` constructor
   - Calls `super()` to initialize username
   - Then sets `email` and `password`

4️⃣ The object `obj` has access to:
   - Its own method: `addCourse()`
   - Inherited method: `logMe()`
   - Inherited property: `username`

💡 This is very useful for building **hierarchies** of components, users, roles, etc.

*/
