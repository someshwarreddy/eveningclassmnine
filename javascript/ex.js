const ele = document.getElementById('sam')

ele.addEventListener('click',cb);
function cb ( ){
    ele.style.fontSize='30px';
    ele.style.color='red'
}




// compilation process

// 1) token

// 2) parseing

// 3) codegenration;

// var  a =10;

// here var  variable declration

// a is identifier of variable

// = assignment 

// 10 that is numbertype value (literal)

// parsing

// collection of tokens turning into a node tree

// we have to leanrn AST

//  code genration depends on the language 

// Js Datatypes

// 8 types

// Boolean

// undefined

// null

// Number

// BigInt

// String

// objects // non primative and mutable (we can change the values)

// Symbol


// excepet object rest of the datatypes are primitive and immutable


let a = true;
let b = false;

const un= undefined;
 const nn= null;


let k =10
let bi = 1n;

let st ='dfdgjdgjldkgjdg'
let cvv

let obj ={
    a:'kdgndld',
}

typeof(a)



let a = 3; // 0 0 1 1
let b = 4; // 0 1 0 0 

let c= true;
let d =false;
// = assignment operator
// arthmatic operator + - * / %
console.log(a+b, a-b , a*b, a/b, a%b);
console.log(c&&d, c || d , a>b, a<b, a>=b, a<=b, a==b, c===d, c|d , c&d, a|b, a&b, a<<3, a>>3);
// bitwise opreators 

// 0 0 1 1  a<<2   1 1 0 0 0 
// 0 0 1 1 a>>3 0 0 0 0

let bb= 2;
var nn =2;
 if(d){
     let bb=4;
     var nn=222;
     console.log(bb);
     console.log(nn);
 }
 else if(b>a) {
     console.log(' i am else if')
     console.log(a<b)
 }
 else if(a<b){
     console.log('i am another else')
 }
 else{
     console.log('i am else')
 }
 console.log(nn);


var to = false ? true : false

console.log(to)


for(var i = 0; i<=10 ; i++) {
    var dd = i
    console.log(dd)
}

var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  //
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (let j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}

  while( true ) {
      console.log('value of a: %d\n, a');
      a++;
      break
     a>20 ? 'break':a++;
     
   }


   // functions
// 1 named function

function hi() {
  /function block   // 
  console.log('function scope')
 }
 
 hi();// function call/
 
 // unnamed or anonymous function 
 
 const unnamed=  function() {
     console.log('anonymous')
 }
 
 unnamed(); //calling anonymous
 
 // iif
 // immediate invoke function
 // ()();
 
 (function (){ 
 alert('hhhh') 
 })();
 
 function add(a, b) {
     console.log(a+b)
     return a + b;
 }
 
 let sum = add;
 
 sum(1 ,3)
 
 
 // functions
// 1 named function
function parr(a, sai='my name sai', gk='hi kumar'){ // this a is parameter
  //  a stores in parr function scope
      console.log(a, sai, gk)
  }
  parr(hi) // passing argument
  function hi() {
   /function block   // 
   console.log('function scope')
  }
  
  hi();// function call/
  
  // unnamed or anonymous function 
  
  const unnamed=  function() {
      console.log('anonymous')
  }
  
  unnamed(); //calling anonymous
  
  // iif
  // immediate invoke function
  // ()();
  
  (function (){ 
  alert('hhhh') 
  })();
  
  function add(a, b) {
      console.log(a+b)
      return a + b;
  }
  
  let sum = add;
  
  sum(1 ,3)
  
  ssum = 20; // here sum is assigned the value of 20
  ssum++; // increments the value of sum by 1
  function modify(){
      console.log(a*=10)
    a *= 10; // a= a*10
  }
  var a = 10;
  modify();
  // var a= a+b
  // parmeters and arguments
  var gb =1000;
  
  let bbbb=99999;
  console.log(bbbb)
  
  function summm(...theArgs) { // rest param
    let total = 0;
    
    console.log(theArgs)
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  let o=1;
  let b=2;
  let c=3;
  console.log(summm(o,b,c));
  // expected output: 6
  
  console.log(summm(1, 2, 3, 4));
  // expected output: 10

  //() group operator
document.createElement  
document.body.appendChild(buttons)= buttons
document.body.appendChild


// iife 
// hi()
// function hi(){
//     console.log('hi')
// }
// (function (){
//   console.log('iife') 
// })()

// let aaa=a=> console.log('áa')
// aaa()
let a= 2;
let b=4;

((a , b)=> {
    
    console.log(a+b);
})(a,b)

const bb= (a , b)=> {
    
    console.log(a+b);
}
bb(a , b)

// high order functions

function hf(argh) {
    console.log(argh)
    return argh(a,b)
}

hf(bb)


// funtions types 

// named function or defination
//function expression or unnamed or annonmyous
// iife
// arrow function
// functions as first class citizens (or) functions
// pure functions
// higherorder functions
// function curring
// restparmerts

var arr = (...a) => console.log(...a);
arr(10,10,10,10); // argument
//spread opreator

var ass= 'jsghgkgjskghsdgk'
var dd=[...ass]
console.log(...dd);
(function(){
  alert('iife with anonmyous')}); // terment
  
  (()=> {alert('hi')}); // terment

   ;(function (){})()
  ;(function (){})()

  for(var a =0; a<=2; a++){
    const buttons = document.createElement('button');
    buttons.innerText= 'button'+ a;
    document.body.appendChild(buttons);

     buttons.onclick = (function (aa){
    return () => alert('hi am'+aa)
    })(a)
  
  }

  function callback(){
    alert('hi i am call back passed as argumnet to high order function')  
  }
  
  
  function highor(highorderparam){
      highorderparam();
  }
  function pf(a){
    alert(a)
}

pf('lkgsdgjlsdg')

var pf = (a)=>alert(a*a);
pf(2)
  highor(callback) //

  function pf(a){
    alert(a)
}

pf('lkgsdgjlsdg')
c=100
var pf = (a,b)=>alert(a*b);
function bb(pff){
    a=100
    b=100
    pff(a,b)
}

bb(pf);

cc(55)(5)(6)


var one = cc(2);
var two =one(3)
two(7)
function cc(one){
    return function(two){
       return function(three){
           console.log(one+two+three);
       }
    }
}
bb()
var bb = function (){}
console.log(a)
var a = 20