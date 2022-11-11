//let message : string = 123 // throws error Type 'number' is not assignable to type 'string'.ts(2322)
let message : string = '123';
//let message : number = 123 // Cannot redeclare block-scoped variable 'message'.
let mynumber = 123;


function myCode(a: number){
console.log(a)
}

//myCode(mynumber) // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
myCode(mynumber)