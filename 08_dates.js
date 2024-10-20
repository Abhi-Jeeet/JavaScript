//Dates
let myDate=new Date()
console.log(myDate.toString());//Sun Oct 06 2024 20:36:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Sun Oct 06 2024
console.log(myDate.toLocaleDateString());//6/10/2024
console.log(typeof myDate); //object

let myNewDate=new Date(2024,9,6)//2024->year; (0 based starting, 0-> january; 9->month); 6->date
console.log(myNewDate.toDateString());


