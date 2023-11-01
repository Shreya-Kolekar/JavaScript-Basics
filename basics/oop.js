// To create resuable objects

const user1 = {};
const user2 = {};

// ------------------    Use of this inside functions

function User(username, loginCount,isLoggedIn) {
    // to differentiate the variable username from argument username we use 'this'
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this  // this code will work exactly same even if we don't return 'this'
}

// const UserOne = User("hitesh",12,true);
// console.log(UserOne);

// const UserTwo = User("ChaiAurCode", 11, true);
// console.log(UserOne);
// NOTE: The UserTwo is overwriting the values in UserOne !!!
// NOTE: THat's why we need to use constructor function which creates a new copy every time.

// ----------------  Now creating new instances with 'new' keyword

const UserOne = new User("hitesh",12,true);
const UserTwo = new User("Shreya",10,false);

// console.log(UserOne);
// console.log(UserTwo);

// NOTE: It's no longer overwriting the values.



// ---------------------------------  new --------------------------

// Step1 : Creates new instance
// Step2 : Calls a constructor function - packs all the arguments inside it
// Step3 : all the variables injected inside the 'this'

function UserNew(username, loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }

    return this  // this code will work exactly same even if we don't return 'this'
}

const UserThree = new UserNew("Shreya",10,false);
console.log(UserThree.constructor);
// NOTE: Constructor is information about self