// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());




// -------------------------------  Behind the scene

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("tea", "tea@gmail.com", "123");
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());


// ---------------------------  Inheritance

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`USERNAME is ${this.username}`);
//     }
// }

// class Teacher extends User{
//      constructor(username, email, password) {
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username}`);
//     }
// }

// const chai = new Teacher("chai", "chai@teacher.com", "123"); // If the 'new' isn't used, then throws ERROR
// chai.addCourse()

// const masalaChai = new User("masalaChai");
// // masalaChai.addCourse(); //TypeError: masalaChai.addCourse is not a function

// masalaChai.logMe();




// ---------------------------  Static property

// class User {
//     constructor(username) {
//         this.username = username
//     }

//     logMe() {
//         console.log(`Username: ${this.username}`);
//     }

//     createId(){
//         return `123` // assume this generates unique ID everytime; it is attached to username
//     }
// };

// const hitesh = new User("hitesh");
// console.log(hitesh.createId());   // prints 123

// NOTE:
// But in reality we don't want to give access to this method to every 
// object instanciated from this class.

// TO solve this issue: use static to restrict access of a method to every object.


class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123` // assume this generates unique ID everytime; it is attached to username
    }
};

// const hitesh = new User("hitesh");
// console.log(hitesh.createId());   // TypeError: hitesh.createId is not a function; i.e. access restricted


// This also works with extends

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
};

const iphone = new Teacher("iphone", "i@ph.com");
iphone.logMe(); // prints: Username: iphone
iphone.createId(); // TypeError, static method cannot be accessed by child object either.