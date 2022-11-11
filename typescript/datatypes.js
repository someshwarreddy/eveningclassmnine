//let message : string = 123 // throws error Type 'number' is not assignable to type 'string'.ts(2322)
var message = '123';
//let message : number = 123 // Cannot redeclare block-scoped variable 'message'.
var mynumber = 123;
function myCode(a) {
    console.log(a);
}
myCode(mynumber);
