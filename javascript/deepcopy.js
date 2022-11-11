var originalobj = {
    name:'sai',
    age:27,
     address: {
        street: 'banglore',
       
    },
    me: ()=> 'hi'
}

var copyobj = originalobj;
// console.log(originalobj,copyobj)
// copyobj.name = 'someshwar';
// console.log(originalobj,copyobj)// shallow copy

var a = 10;
var b= a; // copies the value
console.log(a, b )
b=30;
console.log(a,b)

// jsonparse and json stringfy it does not copy the mrthods in object

copyobj=JSON.parse(JSON.stringify(originalobj))
 copyobj.name = 'someshwar';
  copyobj.address.street = 'hyderabad';
console.log(originalobj,copyobj)// deep copy
copyobj= Object.assign({},originalobj)
 copyobj.name = 'someshwar';
  copyobj.location.adress = 'banglore';
console.log(originalobj,copyobj)// deep copy

// spreadopreator

copyvalue={ ...copyobj,
    address: {
        ...copyobj.address, // spreading into nested object then modifying
         adress:'hyderabd jjjjjjjjjjjjjjjjjjjjj new'
    },
       location:{
           ...copyobj.location,
           
           adress:'hyderabad'
       }
   }
   
   
     
   // console.log(originalobj,'copyvalue',copyvalue)// deep copy
   
    copyvalue.name = 'someshwar';
     copyvalue.location.adress = 'hyderabad modfied';
     
   console.log(originalobj,copyvalue)// deep copy