// Object.getOwnPropertyDescritor : statis method that returns all own property descriptors of a given object.

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // prints: 3.14565756, so this value cannot be overwritten


// ------------------   Check properties of objects

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);
// prints: 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true
// }

// console.log(Object.getOwnPropertyDescriptor(chai)); // returns undefined. Bcaz is object 
// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // returns 
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


// ------------------   disrupting properties of self defined objects

// Object.defineProperty( chai, 'name', {
//     writable: false,
//     enumerable: false
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// returns
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }



// ----------------------------  trying to loop on this object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani");
    }
}

// below code runs for all entries of object chai. Also runs for orderChai function
// which is not expected output as it is not in key: value syntax.

// for (let[key, value] of Object.entries(chai)) {
//     console.log(`${key}: ${value}`);
// }


// for solving above problem, we will include if condition
for (let[key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    } 
}