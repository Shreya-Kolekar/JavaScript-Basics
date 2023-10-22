// -----------------  if 
// const temperature = 41;

// if( temperature === 41) {
//     console.log("less than 50");
// }

// -----------------  comparisons <, >, <=, >=, === (also checks type)

// ----------------    Using const inside if
// const score = 200
// if (score >100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }


// -------------------   if execution without the curly braces
// const balance = 1000;
// if (balance >500) console.log("test");


// ------------------- checking multiple conditions if-else

// const balance = 1000;
// if (balance < 500 ) {
//     console.log("less balance");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else {
//     console.log("looks good to go!")
// }


// ------------------   checking multiple conditons
// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard) {
//     console.log("Allowed to buy course");
// }


//  ---------------------------- using && and ||
// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;

// if (debitCard && (userLoggedIn || loggedInFromGoogle)  ) {
//     console.log("Allowed to buy course");
// }



// ---------------------------  switch case

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("Default case");
//         break;
// }


// -------------------------- truthy values
// //true, "0", "false", " " (space inside string) , [], {}, function(){} - empty function

// const userEmail = "sxk@gmail.com";  // true
// const userEmail = "";  // false
// const userEmail = [];  // true

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Dont have email");
// }

// ---------------------  falsy values

//  false, 0 , -0, BigInt 0n , "", null, undefined, NaN

// false == 0 // true
// false == "" // true
// 0 == ''// true


// ------------------- Nullish Coalescing Operator (??) null,undefined

// Useful when any function/program returns Null/undefined value to us then we provide an
// alternative value that is to be used instead of Null/undefined

// let val1;
// val1 = null ?? 10
// val1 = undefined ?? 10
// console.log(val1); // prints 10 in both cases


// --------------------- Ternary operator

// condition ? true :false

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
