// prototypal inheritance

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5)); // returns 25
// console.log(multiplyBy5.power); // returns 2
// console.log(multiplyBy5.prototype); // returns {}

// -------------------------------------------------------------------------------------------

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// defining our own prototypes

createUser.prototype.increment = function() {
    this.score++;
}

// here 'this' means jis. Jisne bhi bulaya hai uspe function chalao.

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

// const chai = createUser("chai", 25);
// const tea = createUser("tea", 250);

// chai.printMe(); // returns cannot read property of undefined

// hence we need to tell createUser that we have added a prototype of our own. 
// So need to use 'new'

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

// chai.printMe() // returns score is 25. :)y






// ----------------------------  Defining a property at object level   -----------------------------

let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:  function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },

    getThorPower:  function () {
        console.log(`Thor power is ${this.thor}`);
    }
}

// Object.prototype.shreya = function () {
//     console.log(`shreya is present in all objects`);

// heroPower.shreya(); // prints: shreya is present in all objects
// myHeros.shreya(); // prints: shreya is present in all objects

// Note:: this means all objects, array, string etc have this property now!.




// ----------------------------  Defining a property at array level   -----------------------------

// Array.prototype.heyShreya = function () {
//     console.log(`Shreya says Hellooo`);
// }

// below is array and should have the defined property
// myHeros.heyShreya(); // prints: Shreya says Hellooo

// below is object and should NOT have the defined property
// heroPower.heyShreya(); // gives ERROR




// -------------------------------      inheritance          ------------

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // TA support gets the properties of TASupport
}



// ------------------------------   modern syntax of inheritance

// getter, setter methods

// Object.setPrototypeOf(TeachingSupport,Teacher); // TeachingSupport can use all properties of Teacher



// -----------------------------   Setting a method for string object


let anotherUsername = 'Shreya     ';

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();