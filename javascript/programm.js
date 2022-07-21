// // program to solve quadratic equation
// let root1, root2;

// // take input from the user
// let a = prompt("Enter the first number: ");
// let b = prompt("Enter the second number: ");
// let c = prompt("Enter the third number: ");

// // calculate discriminant
// let discriminant = b * b - 4 * a * c;
// // 1 3 1
// // 2 1 2
// // condition for real and different roots
// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // condition for real and equal roots
// else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     // root3=4;
//     // console.log(isNaN(root1)) // true here value= Nan
//     // console.log(isNaN(root3)) // true here value= 4

//     // result
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// // if roots are not real
// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

//     // result
//     console.log(
//     `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//   );
// }

// // Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// // Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// // Operand of an argument is NaN (e.g. 7 ** NaN)
// // Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// // Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

let root1, root2;

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let discriminant = (a, b, c) =>  b * b - 4 * a * c;


function roots (discriminant){
 
    if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        
            // result
            console.log(`The roots of 1 quadratic equation are ${root1} and ${root2}`);
        }
        
        // condition for real and equal roots
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);
             root3=4;
            console.log(typeof(root1))
 console.log(isNaN(root1)) // true here value= Nan
 console.log(isNaN(root3)) // true here value= 4
            // result
            console.log(`The roots of 2 quadratic equation are ${root1} and ${root2}`);
        }
        
        // if roots are not real
        else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        
            // result
            console.log(
            `The roots of  3 quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
          );
        }
}

roots(discriminant(a,b,c))