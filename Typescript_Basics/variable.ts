/*---------global scope----------- */
let globalVar:string='i am global variable'
function exampleFunction():void{
    console.log(globalVar);
}
exampleFunction()

/*------function scope-----------
let fnVar=10
console.log(fnVar)
if(true){
    console.log(fnVar)
function nested(){
    console.log(fnVar)
}
}
function someOtherFn(){
    
}*/
/*---var----*/
function someFn(){
    if(true){
        var localVar=100
        console.log("1: ",localVar)
    }
    console.log("2:",localVar)
    function nested(){
        console.log("3:",localVar)
    }
}
someFn()

/*---let----*/
function someFnL(){
    if(true){
        let localVar=100
        console.log("1: ",localVar)
    }
    /*console.log("2:",localVar)
    function nested(){
        console.log("3:",localVar)
    }*/
}
someFnL()

/*---const----*/
function someFnC(){
    if(true){
        const localVar=100
        console.log("1: ",localVar)
    }
    /*console.log("2:",localVar)
    function nested(){
        console.log("3:",localVar)
    }*/
}
someFnC()


let greeter="hey hi"
let times=5
if(times>3){
    let hello="say hello"
    console.log(hello)
}
//console.log(hello)
{
//console.log(c) - used before assign
var c=2
}
{
//console.log(b) -used bfore it declear
let b=2
}
let userAge=45
let userName=42
console.log(userName)
/*function greeting(name){
    return "Hello "+name
}
const result:number=greeting(userName)*/

function greet(name:string):string{
    return "Hello "+name
}
/*const result //Type 'string' is not assignable to type 'number'.
:number=greet(userName)//Argument of type 'number' is not assignable to parameter of type 'string'.*/