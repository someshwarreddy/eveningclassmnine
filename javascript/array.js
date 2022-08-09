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

// Modifying each word
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as it’s been popped off 'words' before filter can even get there
// ["spray" ,"limit"]


let number = [1,2,3,4,5]

console.log(number.filter((value)=> value>3))
let wordss = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWordss = words.filter((word, index, arr) => {
    // console.log("word" + word, "index" + index,)
    //   console.log(arr[index])
    arr[index]=arr[index]+'extra'
    // console.log(arr[index])
    //console.log(word)
  arr[index] +=' extra'
  console.log(word)
  return word.length < 5
})

console.log(modifiedWords)

// number.reduce(in,current)
let sum =number.reduce((inn, curr)=> inn + curr); // 1 2
// 3 3
// 4 6
// 5 10
//15
``
console.log(sum)

var arr = [10, 20, 30, 40, 50, 60];
   
        function sumofArray(sum,currentValue, currentIndex, arr) {
            console.log('sum' + currentValue,currentIndex)
            return sum + currentValue;
        }
        
          let summ = arr.reduce(sumofArray);
          console.log(summ)
          
          
        
