const score =400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//1->100.0, 2->100.00

const otherNumber = 123.5466
console.log(otherNumber.toPrecision(4));//round of upto 4 place 

const hundreds=100000000;
console.log(hundreds.toLocaleString());

//***************Maths*********************
console.log(Math);//object
console.log(Math.abs(-4)); //4
console.log(Math.abs(5));//5
console.log(Math.round(4.5));//5

console.log(Math.ceil(2.3));//3 ceil-> upper(higher value) value dega, 2.3->3; 2.6->3;
console.log(Math.floor(2.9));//2 floor-> lower value dega 2.9->2; 2.1->2;
console.log(Math.min(4,9,6,-1));//-1
console.log(Math.max(5,8,6,100));//100

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min+1)) + min);