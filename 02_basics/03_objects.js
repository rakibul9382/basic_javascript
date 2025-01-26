// singleton
// Object.create   //constructor methode

//object literals
const jsUser = {
    name : "rakibul",
    age : 20,
    town : "tamluk",
    college : "jgec",
    dept : "cse",
    email : "rakibul@gamil.com",
    isLoggedIn : false,
    lastLoginDays :["sunday","monday"],

}
// console.log(jsUser.college);
// console.log(jsUser["lastLoginDays"]);
// jsUser.email = "google@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email = "tipu@gmail.com"

// console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greetingTwo());
console.log(jsUser);