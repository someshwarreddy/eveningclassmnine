// objects and arrays
var b =10; // this value will attched to window object
let a =1; // this value will not attched to window object
//  let objperson = {};
// let arrperson = [];
// data type
//  console.log(typeof(this),typeof(objperson), typeof(arrperson),);


 // literal type object constuctor type

 const objperson = {
    name:'somesh',
    age:36,
 }; // litteral type


 // one is dotnotaion second is bracket notaion
// getting value from the object
 console.log(objperson.name,objperson.age, objperson['name'], objperson['age']);

 objperson.city= 'hyderabad'; // objects are mutabul
 objperson.city='banglore';  // objects are mutable
 objperson['pincode']=501505;
 console.log(objperson)

let personone =  {
    name:'somesh',
    age:36,
    typeofperson(){
        console.log(`male ${this.name}`)  
      }
 }; // litteral type

 let persontwo =  {
    name:'laxmi',
    age:36,
    typeofperson(){
      console.log(`female ${this.name}`)  
    }
 }; // litteral type
 
 personone.typeofperson();
 persontwo.typeofperson();

 function person(value,age) {
    let persons={};
    persons.name=value; 
    persons.age= age; 

    persons.type = function () {
     console.log(this.name);
    }
    console.log(persons, this.persons)

    return persons;

 }

 person('somesh', 36).type();

 console.log(Object.keys(personone).length)
 console.log(Object.keys(personone))

 for (key in  personone) {
    console.log(key)
 }
//  ret.type();

//  console.log(ret)

let input = prompt('enter key'); //input = age 

// console.log(personone.input); //o/p
console.log(personone[input]); // o/p


