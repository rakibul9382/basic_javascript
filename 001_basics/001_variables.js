const accountId = 14453
let accountEmail = "akibulsk423@gmail.com"
var accountPassword= "12345"
accountCity="kolkata"
let accountState;

// accountId = 2 //not allowed
/*
this is comment part here i used / and * for 
comment multiple line
prefer not to use var because of issue in block scope and functional scope
also we can specify memory without using its type but this is not good habbit
in above accountState we dont assign any value lets see what happend is this print or not
you can see that undefined is print in the portion of accountState

*/
console.log(accountId);
accountEmail = "example@com"
console.log(accountEmail);
accountPassword ="938265"
accountCity="tamluk"
console.log(accountPassword);
console.table([accountId, accountPassword , accountEmail , accountCity ,accountState])



