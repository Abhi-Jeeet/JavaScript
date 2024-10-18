/*
stack (primitive), heap (non-primitive)

stack-> 1.copy banta hai
        2.original me koi changes nhi hote
heap->  1.by reference
        2. original me bhi change hota hai

*/

//Stack Memory
let name="shubham"
let anotherName=name;

console.log(anotherName);
anotherName="Abhijeet"

console.log(name);
console.log(anotherName);


//heap memory
let userOne={
    email:"shubham@google.com",
    age:23
}

let userTwo=userOne;

userTwo.email="abhijeet@google.com"

console.log(userTwo.email);
console.log(userOne.email);





