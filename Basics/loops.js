//for loop

for(let i=1; i<=5; i++){
    console.log("abhijeet kumar")
}

let sum=0;
for(let i=0; i<=5;i++){
    sum+=i
}
console.log("Sum= ", sum)


//while loop

let i=1
while(i<=10){
    console.log(i)
    i++
}


//for of loop -> used to iterate in string and arrays

let str="abhijeet"
let size=0;
for(let i of str){
    console.log(i);
    size++
    
}
console.log("Size of str is:",size)


//for in loop is used to iterate in objects

const student={
    name:"Abhijeet",
    age:18,
    college:"IITP"
};
for(let i in student){
    console.log("key=",i, "value: ",student[i])
}

//question
for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log(i)
    }
}

//question
let gameNumber=20
let num=prompt("Guess the write number")
while(gameNumber!=num){
    num = prompt("Oops wrong, Guess it again")
}
console.log("you guessed right")