// ---------------------   explicit def type of variable

// const balance = new Number(100);
// console.log(balance.toString().length);


// --------------------    Define precision value
// const otherbalance = new Number(23.8966);
// console.log(otherbalance.toPrecision(3));     // 23.9  
// console.log(otherbalance.toPrecision(2));     // 24  

// --------------------- toLocaleString() 
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-US'));    // 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));    // 10,00,000



// ------------------------  Maths

// math library comes with JavaScript by default
// console.log(Math);   // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); //  5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,3,6,8)); // 3

// console.log(Math.random());   // ALways gives values between 0 and 1
// console.log(Math.floor(Math.random()*10) + 1 );  // to get values starting from 1 upto 9.


// to generate random numbers within a given range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);  
// floor to remove decimal digits 
// (max-min+1) to avoid getting an Zero
// (...) + min to start getting values starting from min







