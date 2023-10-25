// ------------    Declaration of objects in two ways literal and constructor  ---------------------

// Constructor === singleton

// ----------------   Creating  object literals  --------------------------
// const jsUser = {
//     name: "Shreya",
//     age: 24,
//     loca:'Paris',
//     email: 'shreya@jmail.com',
//     isLeggedIn: false,
//     lastLogin : ["Monday", "Saturday"]

// }

//  accessing objects

// console.log(jsUser.email);
// console.log(jsUser['email']);


//  --------------------    declaring symbol inside an object and then printing it  ---------------

// const mySym = Symbol("key1");

// const jsUser = {
//     [mySym]: "mykey",
//     name: "Shreya",
//     age: 24,
//     loca:'Paris',
//     email: 'shreya@jmail.com',
//     isLeggedIn: false,
//     lastLogin : ["Monday", "Saturday"]

// }
// console.log(jsUser[mySym]);

//  -------------------            Object.freeze()   ----------------------------

// Object.freeze(jsUser);
// jsUser.email = "kolekar@jmail.com";
// console.log(jsUser);



// ----------------------- Adding functions inside Object    ---------------------------------

// const mySym = Symbol("key1");

// const jsUser = {
//     [mySym]: "mykey",
//     name: "Shreya",
//     age: 24,
//     loca:'Paris',
//     email: 'shreya@jmail.com',
//     isLeggedIn: false,
//     lastLogin : ["Monday", "Saturday"]

// }
// jsUser.greeting = function(){
//     console.log('Hello js users');
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello js users, ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


// --------------------------------     Creating objects as singleton -------------------

// const tinderUser = {};            // non-singleton

const tinderUser = new Object();  // singleton
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@fmail.com",
    fullname: {
        userfullname: {
            firstName: "Hitesh",
            lastName: 'Choudhary'
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

//  ------------------     Merging  objects     ---------------------------------

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"c", 6:"d"};


// Method 1 : 
// const obj3 = { obj1, obj2};
// console.log(obj3);    // creates object within object and doesn't merge them into one single object

// Method2 :
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
// OR
// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

// Method3: Spread operator
// const obj3 = {...obj1, ...obj4};
// console.log(obj3);


// Method 4:
// const users = [
//     {
//         id:1,
//         email: "aaa@gmail.com"
//     },
//     {
//         id:2,
//         email: "bbb@gmail.com"
//     },  
// ]
// console.log(users[1].email);    // to access email of first object in the array users


// -----------------   accessing the keys of object  -------------------------------

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // returns array of keys
// console.log(Object.values(tinderUser));  // returns array of values
// console.log(Object.entries(tinderUser));  // returns array of array of key,value



//  -------------------  checking if a key is present or not  -----------------------

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





