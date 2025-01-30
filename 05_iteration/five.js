const coding = ["js","python","java","cpp","ruby"]
// coding.forEach( function(item){
//     console.log(item);
    
// } )
// coding.forEach((value) => {
//     console.log(value);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);
// coding.forEach((value,index,arr) => {
//         console.log(value,index,arr);
// })
const myArray = [
    {
        'languagName' : "java script",
        'languageFileName' : "js"
    },
    {
        'languagName' : "java ",
        'languageFileName' : "java"
    },
    {
        'languagName' : "python",
        'languageFileName' : "py"
    }
];
myArray.forEach((item)=>{
    console.log(item.languagName);
    

})
myArray.forEach((item)=>{
    console.log(item);
    

})