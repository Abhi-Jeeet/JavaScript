const userEmail="abhijeet"

if (userEmail) {
    console.log("Got the user mail id");
    
}
else{
    console.log("Not accepted");
    
}

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("its empty");
    
}
else{
    console.log("Not empty");
    
}

//checkimg whether the object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1= 5??10 //5
// val1=null ?? 10 //null
//val1 = undefined ?? 15 // undefined

// val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator
const age=18
age==18 ? console.log("Eligible for driving") : console.log("Not eligible for driving");


