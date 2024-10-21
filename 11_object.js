//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Abhijeet",
    "full Name":"Abhijeet Kumar",
    [mySym]:"mykey1",
    age:18,
    location: "Chatra",
    email:"Abhijeet@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Sunday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);//-> this will be used when object key is in string and their is a space between the name of the key.
console.log(JsUser[mySym]);

Object.freeze(JsUser)//object get freezed means-> we can't do any changes to the object

JsUser.email="Abhijeet@microsoft.com"
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(JsUser.greeting());








