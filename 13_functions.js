function sayHii(){
    console.log("hii");
    
}
sayHii()



function addTwoNumbers(a,b){//-> a and b is call parameters
    console.log(a+b);
    
}
addTwoNumbers(2,"4")//->2,4 called arguments


function addNumber(num1, num2){
    return num1+num2
}
//jab bhi function me return krenge tb usse store krna hoga then output show hoga
let result = addNumber(2,4)
console.log(result);



function loginUserMessage(username){
    if(!username){
        console.log("hii")
        return
    }
    return `${username} just logged in`
}
let ans=loginUserMessage("Abhijeet")
console.log(ans);

