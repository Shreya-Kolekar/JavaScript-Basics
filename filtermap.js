// ---------------  forEach doesn't return any value

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);  // returns undefined


// const values = coding.forEach( (item) => {
//     return item
// })
// console.log(values);  // returns undefined


// -------------------------------  using filter for returning values

const myNums = [1,2,3,4,5,6,7,8,9,10];

// Method 1 
// const values = myNums.filter( (num) => num > 4);
// console.log(values);  // prints [ 5, 6, 7, 8, 9, 10 ]


// Method 2
// const values = myNums.filter( (num) => {
//     return num > 4
// });
// console.log(values);  // prints [ 5, 6, 7, 8, 9, 10 ]

// Method 3
// const newNums = [];
// myNums.forEach( (num) => {
//     if (num >4){
//         newNums.push(num)
//     };
// });
// console.log(newNums); // prints [ 5, 6, 7, 8, 9, 10 ]


// --------------------------   Dealing with objects inside array

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },

    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2008
    },

    {
        title: 'Book Three', genre: 'History', publish: 2006, edition: 2007
    },

    {
        title: 'Book Four', genre: 'Science', publish: 1998, edition: 2010
    },

    {
        title: 'Book Five', genre: 'Fiction', publish: 1992, edition: 2010
    },

    {
        title: 'Book Six', genre: 'History', publish: 1981, edition: 2006
    }
];


let userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);

userBooks = books.filter( (bk) => { return bk.publish >= 1990 && bk.genre === 'Science' })
// console.log(userBooks);


// ------------------------    Using maps to iterate
const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumber.map( (num) => num + 10 );
// console.log(newNums);

// ------------------------    Using forEach to iterate
// const tempNum = [];
// myNumber.forEach( (num) => {
//     tempNum.push(num+10);
// })
// console.log(tempNum);



// --------------------------  Chaining

// const newNums = myNumber
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40);
// console.log(newNums);



// ---------------------------  array.reduce()

// takes input of accumulator, current value and Initial value


// Method 1
// const myTotal = myNumber.reduce( function(acculumulator , currentValue) {
//     return acculumulator + currentValue 
// }, 0);
// console.log(myTotal);


// Method 2
// const myTotal = myNumber.reduce( (acculumulator , currentValue) => acculumulator+currentValue, 0);
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 299
    },
    {
        itemName: "Python",
        price: 2999
    },
    {
        itemName: "mobile dev",
        price: 799
    },
    {
        itemName: "Data scince",
        price: 999
    },
];

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(priceToPay);