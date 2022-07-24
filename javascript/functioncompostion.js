// function compostion
// x=1;
// y=2;
// function rest(){
//     x=5;
// return function () {
//     return x+y;
// }
//let summm = function(a){
    //     console.log(a)
    //     return x+a
    // }

// //   let rr = function() {
// //     return x*y;
// // }
// }
//  rr = rest()()
// console.log(rr)
let a = 3
let b=2;
const numbers = [3,2];
let sum = (a,b) => a+b; // 
let mul = (a,b) => a*b;
let sub =(a,b)=> a-b;
let val=numbers;
let logic = (fn) =>numbers.reduceRight(fn);

let compose = (...fns) =>()=> fns.reduceRight(logic);
let resl = compose(sum,mul) // working as highorder 
console.log(resl())


function rr(a,b){
console.log(a,b)
}
function g(a,b){
    console.log(a,b)
rr(a,b)
}

g(a,100)

// console.log(resl)
//  let compose = (...fns) => (...initialVal) => fns.reduceRight((val, fn) => {console.log(val=initialVal,fn);
//     return val.reduceRight(fn)}, initialVal)
// sum(b,mul(value))
// let compostion = (sum,mul) => sum(b,mul(value,b))
//  let compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);
// let resl = compostion(sum, mul) // working as highorder ;
// const numbers = [50, 25];
// console.log(numbers.reduceRight(sum));

// let fns=[sub,sum,mul]

// console.log(fns.reduceRight((val,fn) => fn(val),1));
// console.log(summm())