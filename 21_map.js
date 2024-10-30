const arr=[1,2,3,4,5,6]
const newArr1=arr.map((nums)=>{
    return nums*10
})
console.log(newArr1);

//map->map->filter
const newArr2=arr.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=>nums>30)
console.log(newArr2);

