// const tinderUser = new Object()

const tinderUser = {}


tinderUser.id = "rakibul9623"
tinderUser.name="Rakibul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullname : {
            firstname : "Rakibul",
            lastname : "Islam"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);
// console.log(regularUser.fullName);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3  = {obj1,obj2}
// const obj3  = Object.assign(obj1,obj2)
const obj3  = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email : "example@gmail.com"
    },
    {
        id : 3,
        email : "rakibul@gmail.com"
    },
    {
        id : 2,
        email : "etipue@gmail.com"
    }
]
console.log(users[1]);
console.log(users[2].email);

console.log(tinderUser);
console.log(typeof (Object.keys(tinderUser)));
console.log(Object.values(tinderUser));
console.log(typeof (Object.keys(tinderUser)));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
