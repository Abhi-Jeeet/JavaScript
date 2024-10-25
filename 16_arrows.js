const user={
    username:"abhijeet",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to the website`);
        
    }
}
user.welcomeMessage()
//this-> it is refering to the current context
user.username="Shubham";
user.welcomeMessage()


//Arrow Function
const result=(num1,num2)=>{
    return num1+num2
}
console.log(result(4,5));


//Implicit Return
const addTwo=(num1,num2)=> (num1+num2)
console.log(addTwo(4,5));
//curly braces use kiya to return likhna pdega
//parenthesis use kiya to return nhi likhna pdega
    

//access object in function
const add=(num1,num2)=> ({username:"Abhijeet"})
console.log(add(5,4));

