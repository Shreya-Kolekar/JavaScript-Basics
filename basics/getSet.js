// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password
//     }
//     // can set getter/setter methods on any variables inside the constructor
//     // if you set getter method then defining setter method is also mandatory

//     get password(){
//         return `${this._password}encrypt`
//     }

//     set password(value){
//         this._password = value;
//     }

//     get email(){
//         return this._email.toUpperCase();
//     }

//     set email(value) {
//         this._email = value;
//     }

// }

// const hitesh = new User("h@hitesh.ai", "123");
// console.log(hitesh.password);


// -------------------------------  set and get using PROPERTIES

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    })
}

const chai = new User("chai@chai.com" , "chai");
console.log(chai.email);