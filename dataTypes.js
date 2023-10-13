"use strict"; // treat all JS code as newwer version

// alert("helloooo"); // throws error bcaz, we are using node.js not browser

// console.log(3 + 3);


// primitive type
// number
// bigInt
// string
// boolean
// null => standalone value
// undefined 
// symbol => to find uniqueness

// reference type
// object

// console.log('typeof "Ramesh is"', typeof "Ramesh");
// console.log('typeof null is', typeof null);
// console.log('typeof undefined is ', typeof undefined);


// ----------------------------------  Conversion  ------------------------------------ //


// let score = "33a";   // "33a" , NULL , "undefined"
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);             // shows NaN

// "33ab" => NaN
// true  => 1 false => 0



// ---------------------------------  Operations  --------------------------------- //


// + - / % 

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// let str1 = "hello";
// let str2 = "Kaki";
// console.log(str1+str2);

// Priority of conversions:

// console.log("1" + 2);          // 12
// console.log("1" + 1 + 2);      // 112
// console.log(1 + 2 + "2");     // 32

// Boolean

// console.log(true);   // 1
// console.log(+true);  // 1


// prefix and postfix operator

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"



// -------------------------------  Comparison  ----------------------------------- //

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);      // false
// console.log(null == 0);     // false
// console.log(null >= 0);    // true     
// the reason is that an equity check == and comparisons >, <, >=, <= work differently
// Comparisons convert null to a number, treating it as 0. 
// That's why null >= 0 is true.


// console.log(undefined == 0);  // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false


// STRICT CHECK

// console.log("2" === 2);


/*  ---------------------------------  SUMMARY  -----------------------------  */

// the way in which data is stored and accessed in memory gives two data types.

// Primitive - Call by value
// string, number, boolean, null, symbol, undefined, bigInt


// Reference type - Call by reference
// arrays, objects, Functions


// Symbol data type
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id);
console.log(anotherid);
console.log(id === anotherid);    // false


// Declaration of ref types 

// const heroes = ["Shaktiman", "Naagraj", "Doga"];
// let myObj = {
//     name:"Shakuntala",
//     age:23
// }
// const myFunc = function(){
//     console.log('Hello World');
// }



