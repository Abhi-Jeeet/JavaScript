let marks=[10,20,30,40,50,60,32,10];
console.log(marks)
console.log(marks.length)
console.log(marks[7])
marks[0]=48;
console.log(marks)

//in javascript
//string->immutable
//array->mutable

//loop in arrar
let car=['xuv700','xuv500','harrier','scorpio','creta','alto']
for(let i=0; i<car.length; i++){
    console.log(car[i])
}

//for of loops
for(let i of car){
    console.log(i.toUpperCase())
}

//question
let mar=[85,97,44,37,76,60];
let sum=0;
for(let i of mar){
    sum+=i;
}
let avgMarks=sum/mar.length;
console.log(`avg marks of the class = ${avgMarks}`)

console.log(250*(10/100))

//question
let price=[250,645,300,900,50]
for(let i=0; i<price.length; i++){
    price[i]=price[i] - price[i]*(10/100)
}
console.log(price)


//ARRAYS METHODS  

//push-> to add at the end
//pop->delete from end
//to string()->convert to string
//concat()-> joint the arrays
//unshift()-> add to start
//shift()->delete from start
//slice(): return a piece (startInd, endInd)
//splice()->xhange original array(add,remove,replace) -> splice(startIdx, delCount, new Element)


//splice
let num=[1,2,3,4,5,6,7,8]
num.splice(3,3,50,60,70)


//add element using splice
num.splice(2,0,123)

//remove element using splice
num.splice(3,1)

//replac element using splice
num.splice(4,1,20)



//Question
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
companies.splice(2,1,"Ola")
companies.push("Amazon")
console.log(companies)