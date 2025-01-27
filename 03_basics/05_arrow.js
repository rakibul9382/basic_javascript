const user = {
    username : "Rakibul",
    price : 909,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}
user.welcomeMessage()
user.username = "tipu"
user.welcomeMessage();

//arrow function
// const arrow = () => {
//     let username = "Rakibul"
//     console.log(this.username);
    
// }
// arrow()
// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(9,8));
/*
               implict return
// const addtwo = (num1,num2) => num1 + num2
const addtwo = (num1,num2) =>( num1 + num2)
*/

const addtwo = (num1,num2) => ({username : "rakibul"})
console.log(addtwo(9,8));
