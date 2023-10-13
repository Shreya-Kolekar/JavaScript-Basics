//  --------------------     Merging two arrays    ----------------------

const marvel = ['Thor', 'IronMan', 'Spiderman'];
const dc = ['superman', 'flash', 'batman'];

// PUSH method  (appends an array entirely into another array)
// marvel.push(dc);
// console.log(marvel);  // [ 'Thor', 'IronMan', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]


// Concat method  (returns new array by merging the given arrays)
// const allHeroes = marvel.concat(dc);
// console.log(allHeroes);  // [ 'Thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]


// Spread operator - separates each array into individual elements
// const allNewHeroes = [...marvel, ...dc];
// console.log(allNewHeroes);


// flat operator - rets new array with all sub-array elements concatenated into it recursively upto the specified depth
// const anotherArr = [1,2,3,[4,5,6],7, [5,9,0, [4,5]] ]; 
// const realArr = anotherArr.flat(Infinity);  //argument == depth to which you want to concatenate
// console.log(realArr);


// .isArray operator
// Array.isArray('anystring') - returns bool, array or not

// .fromArray operator
// Array.from('anystring') - ret an array with individual elements. ex: ['a', 'n', 'y' , 's'.....'g']
// console.log(Array.from({name:'Shreya'})) // returns empty array as we haven't specifies whether to choose key or value to be converted into array


// .of operator - returns a new array from set of elements
// let score1 = 100;
// let score2 = 200;
// let score3 = 400;
// console.log(Array.of(score1,score2,score3));
