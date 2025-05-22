// code using Object.defineProperty to implement getters and setters manually in a constructor function.

function User(email, password) {
    this._email = email;
    this._password = password;

    // Define getter and setter for 'email'
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase(); // read: returns uppercase
        },
        set: function (value) {
            this._email = value; // write: sets internal _email
        }
    });

    // Define getter and setter for 'password'
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase(); // read: returns uppercase
        },
        set: function (value) {
            this._password = value; // write: sets internal _password
        }
    });
}

const man = new User("email", "man");
console.log(man.email);    // Output: EMAIL
console.log(man.password); // Output: MAN


// 🧠 Concept Breakdown
// 🔸 Object.defineProperty(object, propertyName, descriptor)
// Used to define or modify properties with custom behavior (getters/setters, enumerability, etc.)

// 🔸 Private Naming Convention (_email, _password)
// Prefixed with _ to indicate they are internal/private.

// Avoids naming conflict and recursion inside getters/setters.