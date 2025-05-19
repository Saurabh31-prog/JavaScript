const user = {
    username: "hitesh", 
    loginCount: 8,
    signedIn : true,

    getUserDetails: function() {
    //    console.log("hello")
    //    console.log(`username : ${this.username}`);
       console.log(this);
    }
}

// console.log(user);
//  console.log(user.getUserDetails());
// console.log(this)



//constructor
// new keyword is constructor function it allows us to create multiple instances from single object literal
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn)
{
   this.myusername = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   //return this : implicityl defined 

   this.greeting = function() {
    console.log(`welcome ${this.username}`);
   }
}

const userOne = new User("saurabh", 12, true);
const usertwo = new User("hi", 11, false); //overwrites userOne
console.log(userOne.constructor);
// console.log(usertwo);




// ------------------------------------------------------
//steps: 
// step 1=> new key : empty object is created 

//step 2 => cosntructor function is called because of new keyword packs the arguments and gives it
//step  3 =>  Arguments gets injected into this keywork


