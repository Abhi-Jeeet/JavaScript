//arithmetic operators
let a=5
let b=6

console.log("a =",a , " & b = ",b)

console.log("a + b =",a+b )
console.log("a - b =",a-b )
console.log("a * b =",a*b )
console.log("a / b =",a/b )
console.log("a % b =",a%b )
console.log("a ** b =",a**b ) //power


//conditional statements i.e if and else

//1
let mode= "dark";
if(mode==="dark"){
    console.log("dark")
}
else{
    console.log("white")
}

//2
let mode1="dark"
let colour;
if(mode1==="blue"){
    colour="black"
}
else{
    colour="white"
}
console.log(colour);

//3
let age=1
if(age>=18){
    console.log("you can vote")
}
else{
    console.log("you CANNOT vote")
}

//odd or even
let num=13
if(num%2===0){
    console.log(num, "EVEN Number")
}
else{
    console.log(num, "ODD number");
    
}

//if elseif statement

let Age=8;
if(Age < 18){
    console.log("Junior")
}
else if(Age > 60){
    console.log("Senior");    
}
else{
    console.log("Middle")
}


//ternary operators
let car='Mahindra'
let result = car==='Mahindra'? "Right guess":"Wrong Guess"
console.log(result)

//Question
// let num1=prompt("Enter your number")
// if(num1%5===0){
//     console.log("Your number is multiple of five")
// }
// else{
//     console.log("Your number is not multiple of 5");
    
// }

//questions
let scores=40;
if(scores>=80 && scores<=100){
    console.log("A");   
}
else if(scores>=70 && scores<=89){
    console.log("B")
}
else if(scores>=60 && scores<=69){
    console.log("C")
}
else if(scores>=50 && scores<=59){
    console.log("D")
}
else if(scores>=0 && scores<=49){
    console.log("F")
}

