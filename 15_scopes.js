
if(true){
    let a=20;
    var b=40;
    const c=50;
}

// console.log(a)

// console.log(b) var b is accessible outside of the scope which is a problem.that's why we use let and const.

// console.log(c)

function one(){
    const userName="Abhijeet"

    function two(){
        const website="youtube"
        console.log(userName);
        
    }
    // console.log(website);-> show error due to out of scope
    two()
    
}
one()



if(true){
    const userName="Abhijeet"
    if(userName==="Abhijeet"){
        const website=" youtube"
        console.log(userName+website);
        
    }
    // console.log(website);//out of scope
    
}
// console.log(userName);//out of scope


//HOISTING
//way1 to write function
console.log(addOne(4))
function addOne(num){
    return num+1
}//output->5



//Way2 to write function 
console.log(addTwo(4))
const addTwo=function(num){
    return num+2
}
//this will show error->Cannot access 'addTwo' before initialization 
