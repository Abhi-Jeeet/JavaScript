let str="Abhijeet Kumar"
console.log(str.length)
console.log(str[1])

for(let i of str){
    console.log(i)
}


//template literals-> A way to have embedded expressions in strings
// string text${expression}string text

let templateliterals= `This is an template literals`
console.log(templateliterals);


//example of template literals

const student={
    name: "abhijeet",
    age:18
};
let output=`this is ${student.name} and age is ${student.age}`
console.log(output);

let number=`the addition of 2 and 3 is ${2+3}`
console.log(number)


//Escape characters
//\n-> next line
// \t->tab space
console.log("Abhijeet\nKumar")



//String Methods

//str.toUpperCase()
//jab bhi change aayega wo same string me nhi aayega , new string me store krna hoga and then return krna hoga

let str1='Abhijeet Kumar'
let newstr=str1.toUpperCase()
console.log(newstr)

let newstr1=str1.toLowerCase()
console.log(newstr1);

let newstr2=str1.trim() // remove the whitespaces from the starting and ending
console.log(newstr2)

//slicing
console.log(str1.slice(0,6))


//Question
let username=prompt("Enter your username")
let output1=`@${username}${username.length}`
console.log(output1);