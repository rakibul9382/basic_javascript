//function
function sayMyName(){
    console.log("r");
    console.log("a");
    console.log("k");
    console.log("i");
    console.log("b");
    console.log("u");
    console.log("l");
    
}
// sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumber(5,9)

function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result
}
// let finalResult = addTwoNumber(3,85)
// console.log(finalResult);

function loginUserMessage(username){
    if (username===undefined) {
        console.log('please enter a username');
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
