//for of->array

const arr=[1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

const word=["Tata","Mahindra","BMW","Porsche"]
for(const carName of word){
    console.log(`car name is ${carName}`);
    
}//print -> tata, mahindra, bmw


const greeting="Hello world"
for(const greet of greeting){
    console.log(greet);
    
}//printing each char-> h,e,e,l,l,o w,o,r,l,d


//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("Fr", "France")
map.set("IN", "India")
console.log(map);

//destructuring of map
for(const[key, values] of map){
    console.log(key,"->", values);
}
/*output->
IN -> India
USA -> United States of America
Fr -> France*/

//for in -> obj
const myObj={
    Mahindra:"Xuv500",
    Tata:"Harrier",
    Toyota:"Fortuner"
}
console.log(myObj);

//destructuring of object 
for (const key in myObj) {
        console.log(key,"->",myObj[key]);
         
}
//only key->mahindra, tata, toyota
//myObj[key]->Xuv700, harrier, fortuner



//for each-> callback function
const coding=["js","ruby","c++","python","java"]
coding.forEach(function(val){
    console.log(val)
})

coding.forEach((items)=>{
    console.log(items);
    
})

//items, index, fullarr
coding.forEach((items,index,arr)=>{
    console.log(items, index, arr);
    
})

//finding the value of the object under the array, array->object->value

const myCoding=[
    {
        languageName:"C++",
        extension:"c++"
    },
    {
        languageName:"java",
        extension:"java"
    },
    {
        languageName:"Python",
        extension:"py"
    }

]

myCoding.forEach((items)=>{
    console.log(items.languageName, items.extension);
    
})

for (const key of myCoding) {
    console.log(key.extension);
    
}