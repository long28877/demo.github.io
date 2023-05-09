a = 3 //int
console.log("a = " + a)
b = 3.5 // double
c = "hanoi"// string
d = true // boolean
e = 'x' //char 
f = (12,323,1234) // array

// 1: var (globle scope)
var a =10
var b =4
var c = a + b //14
var d = x * b //40
var e = a/b // 2.5
//console.log(f)
var f = a % b // 2
//2: let (local scope)
function demo(){
    let a = 1
    let b = 2 
    let c = a +b
    console.log("c = " + c)
}
demo()
console.log(a)
//3: const (hang so)
const pi = 3.14
console.log("PI number = "+ pi)
