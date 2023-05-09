//1. ham co tham so va co return 
function sum (a, b){
    return a + b
}
console.log(sum(5,8))
// 2: ham co tham so nhung khong return 
function sayHello (name){
    console.log("hello " + name)
}
sayHello("Greenwich Vietnam")

//3: ham khong cos tham so nhung co return 
function currentYear (){
    return 2023
}
console.log("We are living in " + currentYear())

//4: ham khong co tham so vaf cung khong co return 
function greenwich(){
    console.log("Welcome to greenwich vietnam")
}
greenwich()