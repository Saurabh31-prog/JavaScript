// ✅ CLASSES in JavaScript (ES6+ syntax)

class User {
    constructor(username, email, password) {
        // Constructor is automatically called when new User(...) is used
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // These methods are added to the prototype of User
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("codi", "coding@js.com", "1233");

console.log(user1.encryptPassword());  // Output: 1233abc
console.log(user1.changeUserName());   // Output: CODI

/* ✅ What’s happening?

- `new User(...)` creates an object.
- `constructor` initializes the values.
- `encryptPassword` and `changeUserName` are shared via `User.prototype`.
*/

// ---------------------------------------------------

/* 🟡 SAME FUNCTIONALITY using PROTOTYPE syntax (before ES6) */

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Methods added to the prototype manually
User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
};

const user2 = new User("tea", "tea@Tea.com", "12333");

console.log(user2.encryptPassword());   // Output: 12333abc
console.log(user2.changeUserName());    // Output: TEA

/* ✅ Notes:

- Both the class-based and prototype-based approaches do the SAME thing.
- In both cases, methods are stored in User.prototype — NOT duplicated in each object.
- Class syntax is just syntactic sugar over prototype-based inheritance.

🧠 Under the hood:
    user2.__proto__ === User.prototype
    So user2 can access all functions defined on User.prototype
*/
