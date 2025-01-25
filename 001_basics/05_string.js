const name = "Rakibul"
const repoCount = 50

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sk Rakilbul Islam')
console.log(gameName.length);


// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.sup());
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));
console.log(gameName.lastIndexOf('l'));
const newString = gameName.substring(1,4)
console.log(newString);
const anotherString = gameName.slice(-5)
console.log(anotherString);

const newStringOne = "     rakibul   "
console.log(newStringOne.trim());

const url = "https://rakibul.com//tipu%20sultan"
console.log(url.replace('%20', '_'));
console.log(url.includes('tipu'));
console.log(gameName.split());
console.log(gameName.split(''));
console.log(gameName.split(' '));








