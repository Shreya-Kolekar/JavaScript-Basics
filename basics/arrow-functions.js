// -------------------------   using this keyword inside object

// const user = {
//     userName: "hitesh",
//     price: 999,
//     welcomeMsg: function() {
//         console.log(`${this.userName}, welcome to website`);
//         console.log(this); // prints the current obj i.e. user object
//     }
// }
// console.log(this);   // PRINTS empty object {}

// NOTE: when we PRINT the above in browser console, we get value of 'this' as window object

 
// --------------------   understanding this

// function chai() {
//     console.log(this);         // this PRINTS global object with lot of info
// }
// chai();

// ----------------------  using this inside function

//  METHOD 1
// function chai() {
//     let username = "Shreya"
//     console.log(this.username);         // this PRINTS undefined
// }
// chai();

// METHOD 2
// const chai = function () {
//     let username = "Shreya"
//     console.log(this.username);         // this also PRINTS undefined
// }
// chai();

// METHOD 3
// const chai = () => {
//     let username = "Shreya";
//     console.log(this.username);       // still PRINTS undefined
//     console.log(this);                // prints empty object {}
// }
// chai();


// -----------------------   Example of arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// -----------------------   IMPLICIT Return
// Note: No need to add 'return' keyword if using round braces for parameters

// Method 1
// const addTwo = (num1,num2) => num1 + num2

// Method 2
// const addTwo = (num1,num2) => (num1 + num2)

// Method 3
// const addTwo = (num1,num2) => ({sampleKey: 'sampleValue'})

// console.log(addTwo(3,4));
