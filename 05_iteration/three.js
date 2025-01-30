// for of loop

// for (const element of object) {
    
// }
// const arr = [1, 2, 3, 4, 5, 6, 7]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello worls!"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
    
// }

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")
// console.log(map);

for (const [key , value] of map) {
    // console.log(value);
    
}

for (const [key , value] of map) {
    // console.log(key);
    
}

for (const [key , value] of map) {
    // console.log(key,":-",value);
    
}

const myObject = {
    'game1' : "GTA",
    'game2' : "vice city",
    'game3' : "spider man",
    'game4' : "minecraft",
    'game5' : "bgmi"
}
for (const key of myObject) {
    console.log(key);
    
}
/*
 for (const key of myObject) {
                  ^
 
 TypeError: myObject is not iterable
*/