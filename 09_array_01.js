//array
const myArr=[0,1,2,3,4,5]
console.log(myArr[2])

//array methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(50) //unshift->add in the front
myArr.shift();//remove from the front

console.log(myArr.includes(1));

const newArr= myArr.join(); // it converts into the string seprated by comma
console.log(newArr);// type->string

console.log(myArr);//type-> object

//slice and splice

console.log("A", myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)

const myn2=myArr.splice(1,4)
console.log(myn2);



