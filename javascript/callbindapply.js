// const fthis = function(a,b){
//     // alert(`${this.a} hi ${this.b}`, a, b);
//     console.log(`${this.a} hi ${this.b}`, a, b);
// }
// fthis('somesh', 'sai')
// fthis.call(obj, 'somesh','rajesh',');

// fthis.apply(obj, ['sai','somesh']); // array of arguments
const obj = {
    a:'somesh',
    b:'sai',
    value: function(a,b){
        // return `${this.name} hi ${this.age}`, a, b;
        console.log(`${this.name} hi ${this.age}`, a, b);
    }
}

const obj2 = {
    name: 'sai',
    age: '25'
}

// let bb = obj.value.call(obj2, 'somesh','value');
// console.log(bb);
let bb = obj.value.bind(obj2);
console.log(bb(1,4));

let arr = [1,2,3,4]

let [one, two , three, four]=arr;

console.log(one, two , three, four)

let objec = {
    name:'somesh',
    age:35
}
let {name:nd, age , area='somesh'}=objec;

console.log(area)
console.log(age)
console.log(name)
console.log(nd)