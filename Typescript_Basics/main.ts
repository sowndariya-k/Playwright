let num1:number=5
let num2:number=10
console.log(num1+num2);
let num:number=10
let hexa:number=0X67CF
let octal:number=0o344
let binary:number=0b1100
console.log(num)
console.log(hexa)
console.log(octal)
console.log(binary)


/*-----------string------- */
let message='good norning'
let color='red'
let sentence='hello welcome to the world'
console.log(message)
console.log(color)
console.log(sentence)

/*-------boolean---------- */
let boolean:boolean=true
let boolvar1=Boolean(true)
let isDone:boolean=true
let isPending=Boolean(true)
console.log(isDone)
console.log(boolean)
console.log(boolvar1)
console.log(isPending)
console.log(typeof(isPending))

/*-------null, undefined ----------- */
let a:undefined
let b:null=null
console.log(typeof(a))
console.log(typeof(b))

/*-------const----- */
const secret=Symbol("secret")
const user={
    name:"Alice",
    [secret]:"top search"
};
console.log(user[secret])
const symbol=Object.getOwnPropertySymbols(user);
console.log(symbol)


/*----Array-------*/
let fruit:string[]=['Apple','orange','Banana']
let fruits1:Array<String>=['Apple','Orange','Banana']
console.log(fruit)
console.log(fruits1)



/*-------------user defined--------------------*/
var fruits:Array<string>=['Apple','Papaya','Orange']
fruits.sort()
console.log("list:",fruits)
console.log(fruits.pop())
console.log("list:" ,fruits)
fruits=fruits.concat('Fig','Mango')
console.log("list:" ,fruits)
console.log(fruits.indexOf('Papaya'))
console.log(fruits.indexOf('Mango'))
console.log("New list: ", fruits.copyWithin(2,1,2))
console.log(fruits.fill('guava',2,4))
console.log(fruits.shift())
console.log(fruits)


/*-------------tuples------------- */
let ourTuple:[number,boolean,string]
ourTuple=[5,false,'Coding God was here']
console.log(ourTuple)


/*--------Enums--------------*/
enum AppStatus{
    ACTIVE='ACT',
    INACTIVE='INACT',
    ONHOLD='HLD',
    ONSTOP='STOP'
}
console.log(AppStatus.ONSTOP);

/*-----------union-------*/
let value:number|string
value=120
console.log("the numeric value of a value is : ",value)
value='Welcome union'
console.log("the string value of a value is : ",value)