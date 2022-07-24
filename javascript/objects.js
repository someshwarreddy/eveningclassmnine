
// object literal syntax

// getting property
let  person = {
name: 'somesh',
gender:['male','female'],


//method
deatils() { 
return ` person name is ${this.name}`
},
}

// Dot notation used to access the object properies
console.log(person.deatils(),person.gender[0]);
// setting property
person.age=32;
console.log(person);

// bracket notation onj['prop']

console.log(person['deatils']())
person['address']='hyderabad'

// objectlength check
console.log(Object.keys(person).length)
console.log(Object.keys(person))
const input = prompt('Get name or age?')

const personn = {
    name: ['Bob', 'Smith'],
    age: 32
  }
  console.log(personn.age)


  const vect1 = {
    name: 'bus',
    vname() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  const vect2 = {
    name: 'car',
    vname() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }

  function vehicle(name) {
    const obj = {};
    obj.name = name;
    obj.vname = function() {
      console.log(`Hi! I'm bus ${this.name}.`);
    }
    function c(){
        alert();
    }
    return obj;
  }

//   let bus = vehicle('bus')
//   bus.vname()

vehicle('bus').vname()
// vehicle('bus').c()
function vehiclee(name) {
    this.name = name;
    this.namevehicle = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
function a(){
  return  function b(){
        alert('hjkkkkk')
    }
}

// a().b()

function makeUser(name, age) {
    return {
      name: name,
      age: function age(){
        alert();
      }
      // ...other properties
    };
  }
  
//   let user = makeUser("John", 30);
//   alert(user.name); // John
makeUser("John", 30).age()
  

// "key" in object
//for (let prop in obj)"
 for (let code in person){
    console.log(code)
 }