let obj = {
    name:'someshwar',
    getarrow: ()=> {
        console.log(`${this.name}`);
    },
    getfunction: function() {
        console.log(`${this.name}`);
    }
}
obj.getarrow(); // undefined
obj.getfunction();// someshwar

var objj = {
    a : 'object???',
    foo : function() {
       return (() => {
            console.log(this.a)
        })();
     
    }
};

var a = 'global!!!';

objj.foo();

var objjj = {
    a : 'object???',
    foo : () => { console.log(this.a) }
};

var a = 'global!!!';

objjj.foo(); // undefined

let objuser = {
    name:'i am ',
    user:['somesh','satish','reddy'],
  
    getuser: function() {
        // console.log(this)
        this.user.forEach(function(username){
            console.log(this)
            // console.log(`${this.name} user `+username);
        },this)
    }
}
solution2
var objuserr = {
    name:'i am ',
    user:['somesh','satish','reddy'],
  
    getuser: function() {
        // this scope is local scope of obj
        // console.log(this)
        this.user.forEach((username)=>{
            // 
            //console.log(this)
             console.log(this.name+ 'user' +username);
        })
    }
}

var userr = {
    name:'i am ',
    user:['somesh','satish','reddy'],
  username: function(username){
      console.log(this.name+ 'user' +username);
  },
  
    getuser: function() {
        // this scope is local scope of obj
        // console.log(this)
        this.user.forEach(this.username)
    }
}


 
  

obj.getuser()

const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
          console.log(item)
          // item = [ 4, 5, [ 6, 7 ], 8, 9 ] 
         // item = [6,7]
          console.log(result)
        result.push(...flatten(item)); 
         console.log(result)
       
      } else {
          // console.log(result)
        result.push(item);
      }
    });
    return result;
  }
  
  // Usage
  const nested = [1, 2, 3, [4, 5, [6 , 7], 8, 9]];
  flatten(nested)
  // console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]