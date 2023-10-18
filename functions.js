// -------------------------------    functions

function sayMyName () {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
    console.log("A");
};
// sayMyName();


// ------------------------------     understanding parameters and arguments

function addTwoNumbers (number1, number1) {  // these are parameters

    let result = number1+number2;
    return result
}
// // const result = addTwoNumbers(3,5);           // these are arguments
// console.log("result is: ", result);



// ----------------------   understanding the output

function loginUserMsg(username) {
    if (username === undefined) {
        console.log("PLease enter a valid username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Shreya"));
// console.log(loginUserMsg());  // undefined just logged in




// ------------------------   spread operator

function calculateCartPriceA(...num1){
    return num1
}
// console.log(calculateCartPriceA(200,799,599));

function calculateCartPriceB(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPriceB(200,100,799,599));  // [799,599]


//  -----------------------  handle object passed as parameters in function: Method 1

const user = {
    userName: "Kaki",
    price: "199"
};

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`);
};

// handleObj(user);


// ----------------------------- Method 2 

// handleObj({
//     userName: "SAM",
//     price: "399"
// })

// -----------------------------  handle arrays passed as parameters to functions

const myNewArr = [200,400,133,599];

function returnSecondValue(getArr) {
    return getArr[1]
};

// console.log(returnSecondValue(myNewArr));




