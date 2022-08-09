// arrays

let arr = [1,2,3,4,5,6];
// console.log(typeof(arr));

// accessing values of array  by using it index postion starts at 0 index nothing but postion that value is stored array[index]

// console.log(arr[7],arr[4]); // 

arr[4]='somesh'
arr[3]= [];
arr[5] = {};
arr[6] = ()=>{};
// arr[9] = 'me 10'
// console.log(arr.length , arr);

// let removedarray = arr.pop();
// let removedarrayt = arr.pop();
// let removedarrayth = arr.pop();
//   console.log(removedarrayth)
//   console.log(arr.length , arr);

arr.push('i am newly added')
// console.log(arr.length , arr);
let arrc = new Array(...arr);
let b= [2, ...arr]

function a(...parm){ // rest parametrs
console.log(parm)
}
console.log(...arr)
a(...arr) // spread 
// spread opreator 

// console.log(b);
let bbb= {}
console.log(Array.isArray(arr));

// u need find it index 
let person = [{}, {}, {}]
console.log(arr.indexOf(2));

let index = arr.indexOf(2);
    
let removed = arr.splice(index,1);
console.log('removedr' +removed) // puput
console.log(arr.indexOf(2));
;
//  let pr = prompt('enter value');

function remove(r) {
    let index = arr.indexOf(r);
    
let removed = arr.splice(index,4); //index is staring postion  1 is number values  u want delete  
// [ 2 3,[],somesh, ]

console.log(removed)
}
console.log(arr) // 8 
// remove(pr)

console.log(arr) // 7

// method reduce , map , filter , shit(), unshift , every , some , concat;
arr =[]
arr = [1,2,3,4,5]

let mapp = arr.map((pa)=>pa*2);
console.log(mapp);



arr.unshift(20000000000000000000000);
arr.unshift(20000000000000000000000);
console.log(arr)

let words = [1,2,3,4,5]

console.log(words.filter((value)=> value>3))

const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)



















