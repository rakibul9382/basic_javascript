//dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleString('en-IN'));
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0 ,25)
let myCreatedDate = new Date("01-25-2025")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // the time in milisecond from 1970 to current time
// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now()/1000)));
console.log(myDate.getFullYear());
const now = new Date();


const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
    
};
const indiaTime = now.toLocaleString('en-IN', options);
console.log(indiaTime);

