function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,586));

// function cartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(cartPrice(100,200,300,586));
const user = {
    username : "rakibul9623",
    real_name : "Rakibul",
    age : 25,
    price : 6859
}
function handelObject(anyobject){
    console.log(`user name is ${anyobject.username} and price id ${anyobject.price}`);
    
}
// handelObject(user)
handelObject({
    username : "rakibul9623",
    real_name : "Rakibul",
    age : 25,
    price : 6859
})
const myNewArray =[1,2,3,4,5,6]
// function handelArray(anyArray){
//     console.log(`value at index 3 is ${anyArray[3]}`);
    
// }
// handelArray(myNewArray)
function returnSecondValue(getArray){
    return getArray[1]
}
let fetch = returnSecondValue(myNewArray)
console.log(fetch);
