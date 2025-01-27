//neasted scope
function one(){
    const username = "rakibul"
    function two(){
        const nikeName = "tipu"
        console.log(username);
        
    }
    // console.log(nikeName);
    // two()
}
// one()

if (true) {
    const username = "tipu"
    if (username==="tipu") {
        const website = " sultan"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

addone(5)
function addone(num){
    return num + 1
}
// addtwo(5)        Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 1
}
addtwo(5) 