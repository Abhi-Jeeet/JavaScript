function myFunction(){
    console.log("Hello, this is abhijeet")
};

myFunction();


//sum of two numbers

//function parameters like a and b-> block scope or a local variable, cant be access beyond this scope
function sum(a,b){
    console.log(`sum of ${a} + ${b} = ${a+b}`)
    
}
sum(4,5)



//ARROW FUNCTION(Modern javascript)

let sum1=(a,b)=>{
    console.log(a+b)
};
sum1(4,5);

//multiplication
let mul=(a,b)=>{
    m=`multiplication of ${a} * ${b} = ${a*b}`
    return m;
}
let val=mul(7,8);
console.log(val)

//question
function noVowels(word){
    let count=0;
    for(let i=0; i<word.length; i++){
        if(word[i]==="a"||word[i]==="e"||word[i]==="i"||word[i]==="o"||word[i]==="u"){
            count++;
        }
    }
    return count;
};

let ans=noVowels("aeiou")
console.log(ans)

//forEach loop in arrays-> agr hume hrr ek value pe jaa kr kuch operations krna hai to ye use kr skte hai

//Higher Order Function / methods-> for each loop hote hai

//question
let arr=[67,52]

arr.forEach((val)=>{
    console.log(val**2)
}

);
