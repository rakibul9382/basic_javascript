const score = 400
const value = new Number(800)

// console.log(score);


// console.log(value);
// console.log(value.toString().indexOf(0));
// const balance = new Number(175.989)
// console.log(balance.toFixed(4)) // thats means how many number will take after point and also return an string value
// console.log(balance.toPrecision(4)) //return a string
// const anotherNumber = 100000
// console.log(anotherNumber.toLocaleString()); // defined in us standard
// console.log(anotherNumber.toLocaleString('en-IN')); //defined in indian style
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.random()); //return the value always greater then 0 and less then 1

console.log(Math.floor((Math.random()*10) + 1));

const min = 1  //lets consider ludo dice
const max = 6

console.log(Math.floor((Math.random()* (max - min + 1))) + min);
