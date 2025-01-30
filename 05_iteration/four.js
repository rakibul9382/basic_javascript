const myObject = {
    'game1' : "GTA",
    'game2' : "vice city",
    'game3' : "spider man",
    'game4' : "minecraft",
    'game5' : "bgmi"
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
    
}
const arr = [1, 2, 3, 4, 5, 6, 7]
for (const key in arr) {
    console.log(arr[key]);
    
}