// block scope and global scope

let a = 310
const b = 20
var c = 30
if (true) {
    let a = 30 //block scope
    const b = 50
    console.log("inner :",a);
    console.log(b);
    
    
}
console.log(a); //global scope
console.log(b);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}