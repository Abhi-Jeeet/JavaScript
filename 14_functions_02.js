function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

//(...num1)-> due to this we can access all the value in the form of array


//object inside a function

//ways1
const Mahindra={
    car:"xuv700",
    price:1200
}
function handleObject(anyobject){
    console.log(`Car name is ${anyobject.car} and the price is ${anyobject.price}`)
}
handleObject(Mahindra);

//ways 2
function userName(myObject){
    console.log(`the employee name is ${myObject.name} and his salary is ${myObject.salary}`)
}
userName({
    name:"Ram",
    salary:120000
})

//Array inside a function

//way 1
const myArray=[200, 400, 100, 600]

function returnValue(getArray){
    return getArray[1]
}
let ans=returnValue(myArray)
console.log(ans);

//way 2
function value(getValue){
    return getValue[3]
}
console.log(value([200,300,400,500,600]))