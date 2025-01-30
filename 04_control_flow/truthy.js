// const userEmail = "rakibul@gamil.com"

// if (userEmail) {
//     console.log("got user email");
    
// } else {
//     console.log("dont have user email");
    
// }
const userEmail = []

if (userEmail) {
    console.log("got user email");
    
} else {
    console.log("dont have user email");
    
}
if (userEmail.length > 0) {
    console.log("hello");
    
}
else{
    console.log("bolo");
    
}
/*
falsy values => false,empty string, 0 ,negative 0 ,0n , null , undefined, nan
truthy values => any string ,any number , any array,'false', " " ,[],{}, f

*/

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("this is a empty object");
    
} else {
    console.log("it's not a empty object");
    
}

// Nullish coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = null ?? 10 ?? 15


console.log(val1);
//terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("price greater then 80") : console.log("price less then 80");

