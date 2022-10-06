// class {
//     properties; // data 
//     a ,b
//     constuctor(a,b){
//         this.a =a;
//         this.b=b;
//     } //
//     methods;
// }

// let a = new class(a ,b)

class person {
    //  name,
    constructor(name) { 
        this.name = name;
     }
    getname() {console.log(`i am  ${this.name}`)};
    
    myname() {console.log(`i am  ${this.name}`)};
}

let teacher = new person('teacher');

teacher.getname();
// let student = new person('student');

// student.myname();
// inheritance
class student extends person {
    constructor(name,age) { 
        super(name)
        // this.name = name;
        this.age = age;
     }
    myname() {
    console.log(`i am  ${this.name} and my group is cse ${this.age}`);
    }
}

let studentt = new student('student', 20);
studentt.myname()
