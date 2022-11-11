//  call by value 
// call by reference
// shallow copy deep copy

let a = 10; // deep copy 

let b = a; // deep copy
b=20;




let originalobj = {
    name:'sai',
    age:27
}

let copyobj = originalobj;
console.log(originalobj,copyobj)
copyobj.name = 'someshwar';
console.log(originalobj,copyobj)// shallow copy

// jsonparse and json stringfy

copyobj=JSON.parse(JSON.stringify(originalobj))
 copyobj.name = 'someshwar';
console.log(originalobj,copyobj)// deep copy

// in above scenario copy // jsonparse and json stringfy does not copy obj method

copyobj= Object.assign({},originalobj)
 copyobj.name = 'someshwar';
  copyobj.location.adress = 'banglore';
console.log(originalobj,copyobj)// deep copy

// spreadopreator
copyobj= {...originalobj}


// spreadopreator
copyobj= {...originalobj}

copyvalue={ ...copyobj,
    location:{
        ...copyobj.location,
        adress:'banglore'
    }
}


  
console.log(originalobj,copyvalue)// deep copy

 copyvalue.name = 'someshwar';
  copyvalue.location.adress = 'banglore';
  
console.log(originalobj,copyobj)// deep copy