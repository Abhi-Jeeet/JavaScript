const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const regulaUser={
    email:"any@gmail.com",
    fullname:{
        userName:{
            firstName:"Abhijeet",
            lastName:"Kumar"
        }
    }
}
// console.log(regulaUser.fullname.userName)

const obj1={1:"A", 2:"B"}
const obj2={3:"c", 4:"d"}

const mergeObj=Object.assign({}, obj1, obj2)
console.log(mergeObj);//{ '1': 'A', '2': 'B', '3': 'c', '4': 'd' } -> merging

//using spread operator
const obj3={...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser))//it gives the output in the array form.
console.log(Object.values(tinderUser));//it also gives the values of an object in the array form.

//Objects Destructure
const resource={
    courseName:"DSA pe charcha",
    coursePrize:4000,
    courseInstructor:"Abhijeet"
}
const{coursePrize:prize}=resource//destructure of the object
console.log(prize)

//json
{
    //-> json structure 
}


