const myArr=[1,2,3,4,5]
const total=myArr.reduce((acc,currVal)=>acc+currVal, 0)
console.log(total);


const shoppingCart=[
    {
        itemName:'js course',
        price:999
    },
    {
        itemName:'c++ course',
        price:9999
    },
    {
        itemName:'java course',
        price:9998
    },
    {
        itemName:'Data Scientist course',
        price:12000
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(priceToPay);
