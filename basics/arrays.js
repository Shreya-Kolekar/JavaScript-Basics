// Declaration of arrays

// collection of multiple items of any data type
// resizable
// array copy operations create shallow copies

// -----------------   SHALLOW COPY   ------------------------
/* 
    " A showllow copy of an object is a copy whose properties 
    share the same resferences (point to the same underlying values)
    as those of the source object from which the copy was made"
*/


// ---------------    Array methods  ---------------------------

// myArr = [1,2,3,4,5,6,7,8];

// PUSH  - appends value in array
// myArr.push(100);
// console.log(myArr);

// POP  - removes last value from the array
// myArr.pop();
// console.log(myArr);

// unshift   - adds at the start of the array
// myArr.unshift(9);  // [9,1,2,3,4,5,6,7,8]

// shift - removes from the start of the array
// console.log(myArr); // [1,2,3,4,5,6,7,8]

// .includes - retuns boolean value

// .indexof - retuns index, if not found returns -1

// .join  - binds to array and converts it into string and comma separated
// const newArr = myArr.join();
// console.log(myArr);  // [1,2,3,4,5,6,7,8]
// console.log(newArr);  // 1,2,3,4,5,6,7,8

//  .slice  -  returns a piece of the array but it doesn't affect the original array.

// myArr = [1,2,3,4,5,6,7,8];

// const mynewArr1 = myArr.slice(1,3);  // starts including from 1 upto 2
// console.log("B", myArr);   // prints original array  // B [1,2,3,4,5,6,7,8]
// console.log('sliced array', mynewArr1);   // prints new array1  // [ 2, 3 ]

// // splice - splice changes the original array by removing, replacing, or adding values and returns the affected values

// const mynewArr2 = myArr.splice(1,3);  // removes from 1 upto 3
// console.log("C", myArr);  //prints original array   // C [ 1, 5, 6, 7, 8 ]
// console.log('spliced array', mynewArr2);   // prints new array2 

