// Class definition with getter and setter methods
class User {
    constructor(email, password) {
        // These assignments internally call the setters
        this.email = email;
        this.password = password;
    }

    // Getter for password - returns value in uppercase
    get password() {
        return this._password.toUpperCase();
    }

    // Setter for password - assigns value to internal variable
    set password(value) {
        this._password = value;
    }

    // Getter for email - returns email in uppercase
    get email() {
        return this._email.toUpperCase();
    }

    // Setter for email - assigns value to internal variable
    set email(value) {
        this._email = value;
    }
}

// Creating a new user instance
const saurabh = new User("saurab@gmail.com", "nju");

// Calling getters to retrieve values
console.log(saurabh.password); // Output: NJU
console.log(saurabh.email);    // Output: SAURAB@GMAIL.COM
