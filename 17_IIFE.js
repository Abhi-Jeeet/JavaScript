// Immediately Invoked Function Expressions

(function code(){
    console.log("Code Executed");
    
})(); //semicolon needed to stop


//syntax-> ()()-> (function)()


(function database(){
    console.log("Database Executed");
    
})();


//array function
((name)=>{
    console.log(`This is ${name}`)
})("Abhijeet")
