const student={
    name:'abhijeet',
    age:18,
    cgpa: 8.62,
    isPass: true

};

console.log(student["name"])
student["age"]=student["age"]+1;
console.log(student.age)


//example
const product={
    title:"Ball Pen",
    rating: 5,
    offer:5,
    price: 20
};
console.log(product);
console.log(product.price);
console.log(product["rating"]);

const profile={
    userName: "@shradhakhapra",
    NoOfPosts: 195,
    followers:569000,
    following: 4,
    threads_id: "@shradhakhapra",
};
console.log(profile)
console.log(typeof[profile])
console.log(typeof profile["userName"]);


