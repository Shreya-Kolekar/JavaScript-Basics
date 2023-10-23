// -----------------------------------  for

// for (let i=0; i<= 10;i++) {
//     const element = i;
//     console.log(element);
// }

// console.log(element); //


// -------------------------------------   do - while loop

// let score = 11;
// do {
//     console.log(`Score is ${score}`);
// } while (score <= 10);


//---------------------------------------   for of 

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "hello";

// for (const greet of greeting) {
//     console.log(`Each char of ${greet}`);
// }


// --------------------------------------  Using for-of ---- maps  
// stores unqiue values and order

const map = new Map();
map.set("USA", "United states of America");
map.set("IN", "India" );
map.set("FR", "France" );
// console.log(map);


/* for (const key of map) {
    console.log(key);
}     // prints the key-values arrays 
*/


/*
for (const [key] of map) {
    console.log(key);
}
 // prints the keys of map
*/


/*
for (const [key,value] of map) {
    console.log(key, "->", value);
}
*/

// ------------------------  CANNOT iterate objects ---- for-of
// const myObj = {
//     game1 : 'NFS',
//     game2: 'SpiderMan'
// }

// for (const [key,value] of myObj) {
//     console.log(key, );
// }
// TypeError: myObj is not iterable


// -----------------------------------  for in

// --------------------------------  Using for-in loop --- Objects  

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


// print keys of object
// for (const key in myObj) {
//     console.log(key);
// }

// print values of objects
// for (const key in myObj) {
//     console.log(myObj[key]);
// }


// --------------------------------  array iteration using for-in

const prgm = ["js", "c++", "java"];

// prints keys of array i.e. 0, 1, 2
// for (const key in prgm) {
//     console.log(key);          
// }

// prints values of array i.e. js, c++, java
// for (const key in prgm) {
//     console.log(prgm[key]);          
// }


// ------------------------  CANNOT iterate on maps using for-in
// for (const key in map) {
//     console.log(key);
// }  // prints NO output


// -----------------------------------  for each
 
const coding = ["js", "ruby", "java", "python", "cpp"];

// for-each will take a callback function without any name for the function and will take every value in 
// array as a parameter
// coding.forEach(function (item) {
// console.log(item);
// })


// Can also use arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })

// giving functions as arugument in forEach
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// printing item, index and entire array inside forEach
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


// iterating on objects inside array

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "ruby",
        langFileName: "rb"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    } 
]

myCoding.forEach((item) => {
    console.log(item.langName);
});