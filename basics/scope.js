//------------------------- SCOPE Part 1
// let , var, scope
// scope: the curly braces with functions/if-else/etc 


// Below, var has global scope
// if(true){
//     let a = 10;
//     const b =  20;
//     var c = 30;
// }

// console.log(a); // not defined
// console.log(b); // not defined
// console.log(c); // 30





//------------------------- SCOPE Part 2 

// Child can access parents scope but not vice versa

// function one(){
//     const username = "Hitesh";

//     function two() {
//         const website = "YT"
//         console.log(username);
//     }
//     console.log(website);         // ERROR

//     two()
// }

// one()




// --------------------------------- Interesting

addOne(5);                       // executes without error
function addOne (num) {
    return num + 1
}


// function written as expression

addTwo(5);                            // gives error as, cannot access addTwo before intitalization // hoisting
const addTwo = function (num) {
    return num + 2
}


