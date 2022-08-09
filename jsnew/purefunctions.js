// purefunctions//

let pure = (a, b) => a + b;

pure(1, 2);

//  function currying  takes single argument 

function currying(a) {
    return function (b) {
        return a + b;
    }
}
currying(1)(2);
// // short term 

let curr = (a) => (b) => a + b;

curr(1)(2)

// impurefunctions  takes global scope value and alter that
var c = 10;
function impure(a, b) {
    c = 20;
    return a + b + c;
}


// flater array 
const arr = [1, 2, [[3, 4]]];


// To flat single level array
let farr= arr.flat(3);
let op = " ";

function flats(arr) {

    for(let i=0; i < arr.length; i++){
   
    if (Array.isArray(arr[i])) {
        // console.log(arr[i])
        flats(arr[i]);
    }
    else {
         op += arr[i];
         console.log(typeof(op))
    }

}
return op;
}

console.log(flats(arr))



