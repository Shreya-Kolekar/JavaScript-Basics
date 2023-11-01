// ----------------------------   Method 1
// function SetUsername(username) {
//     // complex calculations
//     this.username = username;
//     console.log("called");
// }

// function createUser(username, email, password) {
    
//     SetUsername(username);
//     this.email = email;
//     this.password = password;
    
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai); // prints only email and password but NOT username


// ----------------------------   Method 2

function SetUsername(username) {
    // complex calculations
    this.username = username;            // here 'this' belongs to createUser and not SetUser
    console.log("called");
}

function createUser(username, email, password) {
    
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
    
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // prints only email and password but NOT username

