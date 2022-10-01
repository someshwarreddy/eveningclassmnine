// checking value become it comes out

const myDate = new Date();
let object = myDate; //

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null


const myDatee = new Date(1995, 11, 17);

console.log(myDatee.getYear()); // 95

myDatee.getYear = function () {
  console.log("something else!");
};

myDatee.getYear(); // 'something else!'


// const obj = {name:'sai'}

// // obj.push()

// console.log(Object.getPrototypeOf(obj))

// let a = Object.getPrototypeOf(obj)

// console.log(a)

// constructor object
function person (){
    this.name= 'somesh',
    this.getname=function(){

    }
}
// chianing
person.prototype.newname= 'sai' // 
let person1 = new person();
// person1.newname= 'someshwar'

console.log(person1.newname);

//  inheritance
let person2 = new person();
console.log(person2.newname);

person.prototype.newname= 'sai new' // 

// changing 
let person3 = new person();
console.log(person3.newname);
