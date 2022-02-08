interface IUser {
    name:string,
    age:number,
    gender:string
}

const user = {
    name:"Max",
    age:18,
    gender:"male"
}

function sum(a:number,b:number):number{
    return a+b
}

function showSum(a:number,b:number):void{
    console.log(a+b)
}

function incAge(someUser:IUser,inc:number):IUser{
    someUser.age=inc;
    return someUser
}

console.log(sum(2,4))

showSum(10,5)
const newObj=incAge(user,10)

console.log(newObj)