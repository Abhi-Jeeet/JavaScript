// 4 pillars of DOM

//1. selection of an element 
//2. changing HTML
//3.Changing css
//4. Event Listener


//selection of an element
var a= document.querySelector("h1") //for class(".box"), for id("#box")
console.log(a)

//changing html
var a = document.querySelector("h1")
a.innerHTML="changed html"

var b= document.querySelector("p")
b.innerHTML="Changed paragraph"

//changing css
var h2= document.querySelector("h2")
h2.innerHTML="Chaliye Suru Krte Hai"
h2.style.color="red"
h2.style.backgroundColor="pink"

//event listener
var h3 = document.querySelector("h3")
h3.addEventListener("click",function(){
    h3.innerHTML="Hum to deewane hua yaar"
    h3.style.color="white"
    h3.style.backgroundColor="black"
})

//bulb on and of
var bulb = document.querySelector("#bulb")
var btn=document.querySelector("button")
var flag=0
btn.addEventListener("click", function(){
    
    if(flag==0){
        bulb.style.backgroundColor="yellow"
        flag=1
        btn.innerHTML="OFF"
    }
    else{
        bulb.style.backgroundColor="transparent"
        flag=0
        btn.innerHTML="ON"
    }
})