/* JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). */

// ------------------------   Methods of Date ----------------------

// let mydate = new Date();
// console.log(mydate);   // 2023-10-13T20:17:50.163Z
// console.log(mydate.toString());   // Fri Oct 13 2023 15:18:49 GMT-0500 (Central Daylight Time)
// console.log(mydate.toDateString());   // Fri Oct 13 2023
// console.log(mydate.toLocaleDateString());  // 13/10/2023
// console.log(typeof(mydate));   // object


// -----------------------  Creation of a date -------------------------

// let myCreatedDate = new Date(2023, 0, 23);  // Year, month, date
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// let newCreatedDate = new Date(2023, 0, 23, 0, 3);  // Year, month, date, hour(24), min
// console.log(newCreatedDate.toLocaleString());  // 23/1/2023, 5:03:00 am

let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());  // 13/1/2023, 6:00:00 pm


//  ------------------------  Timestamps  ----------------------------------

// comparison of time between two dates
let myTimeStamp = Date.now();
// console.log(myTimeStamp);        // 1697228986426 (miliseconds)
// console.log(myCreatedDate.getTime());  // 1673654400000 (miliseconds)

// conversion to seconds
// console.log(Math.floor( Date.now()/1000) );  //1697229310  (seconds)


// methods of date()

let newDate = new Date();
// console.log(newDate.getMonth());       // 9
// console.log(newDate.getTimezoneOffset());    // 300

// defining details for the methods inside a particular method of Date

// console.log(newDate.toLocaleString('default', {
//     weekday:"long"
// }));