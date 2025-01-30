// if statement

// const temparature = 40;
// if (temparature<50) {
//     console.log("temparature is less then 50");
    
// }
// else{
//     console.log("temparature is greater hen 50");
    
// }
// console.log('kase ho vailog');

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("user logged in");
    
}