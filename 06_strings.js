const name="Abhijeet "
const age=23

console.log(name + age + "kumar");
console.log(`hello My name is ${name}kumar and my age is ${age}`);

const myName= new String("Abhijeet")
console.log(myName[1]);//b

console.log(myName.length);//8
console.log(myName.toUpperCase());//ABHIJEET
console.log(myName.charAt(2))//h
console.log(myName.indexOf('h'))//2

const newString=myName.substring(0,4);
console.log(newString); //Abhi

const anotherString=myName.slice(0,4);
console.log(anotherString);

const newStringOne="  abhi  jeet  kumar"
console.log(newStringOne);
console.log(newStringOne.trim());//trim removes the space from the starting only

const url = "https://abhijeet.com/abhijeet3245kumar"
console.log(url.replace("3245", "1651"))//https://abhijeet.com/abhijeet1651kumar

console.log(url.includes("abhijeete")); //false;

const newName="abhi-jeet-kumar"
const ans = newName.split('-');
console.log(ans);
