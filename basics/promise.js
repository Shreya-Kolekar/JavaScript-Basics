// promise obj represents the eventual completion (or failure) of an async operation.
// States:  pending, fullfiled and rejected


// --------------------------  Method 1

// const promiseOne = new Promise(function (resolve,reject) {
//     // do asyns task
//     //DB calls. cryptography,  network
//     setTimeout(function() {
//         console.log('async task is complete');
//         resolve();
//     }, 1000);
// })


// // Consuming promise

// promiseOne.then(function () {         // this callback function receives argument by default
//     console.log("Promise consumed");
// })


// --------------------------  Method 2

// new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log('async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 resolved");
// })


// --------------------------  Method 3

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         resolve({username: "chai", email: "chai@example.com"});
//     },1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


//------------------------------  Method 4

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         let error = false;
//         if (!error) {
//             // if no error then execute below. the value inside resolve is returned
//             resolve({username:"shreya", password: "xyz"}); 
//         } else {
//             reject('ERROR: Something went wrong');
//         }
//     },1000);
// })

// const username = promiseFour.then((user) => {  // here 'user' will have the value returned by resolve
//     console.log(user);
//     return user.username
// }).then((username) => {              // if resolved
//     console.log((username));
// }).catch(function(error){            // if error
//     console.log(error);   
// }).finally(() => {                   // final result
//     console.log("The promise is either resolved or rejected");
// } )
 

//------------------------------  Method 5

// using async await to handle resolve and reject

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = true;
//         if (!error) {
//         // if no error then execute below. the value inside resolve is returned
//             resolve({username:"shreya", password: "xyz"}); 
//         } else {
//             reject('ERROR: Something went wrong');
//         }
//     },1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch(error) {
//         console.log(error);
//     }  
// }

// consumePromiseFive();


// ---------------------------------  async method 

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()  // this part also needs time to convert into json
//         console.log(data);
//     } catch (error) {
//         console.log(("E: ", error));
//     }
    
// }
// getAllUser()

// -------------------------------  Doing above code with .then.catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch ((error) => {
    console.log(error);
})

