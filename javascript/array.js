const arr = [1,2,3,4,5]
console.log(arr[0]);
arr[9]=9;
console.log(arr.length);
for (let i=0; i<arr.length; i++){
    count=0
    console.log(arr[i])
    if(arr[i]===undefined){
        count++
        console.log(arr[i],count++)
    }
}

for (const val of arr) {
    console.log('value of array  ' + val);
}

for (const key in arr) {
    console.log('key of array  ' +  key);
}

console.log(arr.indexOf(7));

// push method adds element  at last index
// let arr2 = []
arr.push('someshwar');
console.log(arr);
// add at index start not removes previous element
console.log(arr.unshift(10))
console.log(arr);
// delete elemnt from array use pop() removes from the last index returns the removed item

console.log(arr.pop())

// delete elemnt from array use shift() removes from the first index returns the removed item

console.log(arr.shift())

let index = arr.indexOf(3);

if(index!==-1){
    arr.splice(index,1)
}

console.log(arr.length)
// create new array with map function 
function callbackfunction(a){
    return a;
}
let newarr = arr.map(callbackfunction);
console.log(newarr);
// get the filtered array
names =['someshwar' , 'rajesh', 'sai']
 function filtercallb(names){
    console.log(names.length)
    return names.length > 8;
 }
let filterdnames = names.filter(filtercallb);
 console.log(filterdnames);

 const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'


