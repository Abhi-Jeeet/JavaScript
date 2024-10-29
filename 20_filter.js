const arr=[1, 2, 3, 4, 5, 6];
const newArr=arr.filter((nums)=> nums>4)
console.log(newArr);

//if we write inside a scope, we have to use the return for ex-

const arr1=[1, 2, 3, 8, 9, 4, 10]
const newArr1=arr1.filter((nums)=>{
     return nums>5;
})
console.log(newArr1);


const books=[
    {title:'Book one', genre:'Fiction', publish:1981, edition:2004},

    {title:'Book two',genre:'Non-Fiction', publish:1547, edition:2012},

    {title:'Book three', genre:'Science', publish:2000, edition:2024},

    {title:'Book four', genre:'History', publish:1942, edition:2010},

    {title:'Book five', genre:'Fiction', publish:1941, edition:2004},

    {title:'Book six', genre:'Fiction', publish:1981, edition:2000},

    {title:'Book seven', genre:'Comedy', publish:1952, edition:2003},
]

const userBooks=books.filter((bk)=>{
     return bk.edition>=2000 && bk.genre=='Comedy'
})
console.log(userBooks);
