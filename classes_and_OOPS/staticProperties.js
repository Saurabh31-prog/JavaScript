// ✅ STATIC METHODS and CLASS INHERITANCE in JavaScript

// Base class
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    // 🔹 Static method: belongs to the class, NOT the object
    static createId() {
        console.log(`123`);
    }
}

const newuser = new User("saurabh");
// ❌ This will throw an error because static methods are NOT accessible on instances:
// newuser.createId(); // ❌ TypeError: newuser.createId is not a function

// Child class
class Teacher extends User {
    constructor(username, email) {
        super(username); // initialize username from User class
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();        // ✅ Inherited method from User
// iphone.createId();   // ❌ Will throw error: static method is not inherited by object

// ✅ Correct way to access static method:
User.createId();       // Output: 123
Teacher.createId();    // ✅ Also works because static is inherited by the class, not instance

/* 🔍 EXPLANATION of static:

- `static` means the method belongs to the class itself — NOT to the instances (objects) created from it.
- So you can only call it like: `User.createId()` or `Teacher.createId()`, NOT `newuser.createId()`.

🧠 Use Cases for `static`:
- Utility methods (like generating IDs, formatting, validations)
- Factory functions
- Shared logic that doesn’t need `this` or instance-specific data

📦 Example: You often see this pattern:

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(2, 3)); // ✅ 5

*/
