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

    persons.type = function () { // this is act as method 
     console.log(this.name);
     return this.name;
    }
    console.log(persons, this.persons)

    return persons;

 }

 let male =person('somesh', 36).type();

 let female = person('laxmi', 36).type(); //upto here literal type

 console.log(male,female) //upto here literal type
// object constructor
 function personcono(name, age){
   this.name= name;
   this.age = age;
   this.type= ()=> this.name;
 }
let malec = new personcono('somesh', 3455);
let femalee = new personcono('somesh', 3455);
console.log(malec);

console.log(malec.type())
//end of constructor


 console.log(Object.keys(personone).length)
 console.log(Object.keys(personone))

 for (key in  personone) {
    console.log(key)
 }
//  ret.type();

//  console.log(ret)

// let input = prompt('enter key'); //input = age 

// console.log(personone.input); //o/p
// console.log(personone[input]); // o/p

// [{},{},{},{}] {[],[],[],}
 


