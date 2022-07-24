

let root1, root2;
// take input from the user
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));
let c = parseInt(prompt("Enter the thirdggggg number: "));

discriminant = (a, b, c) => b * b - 4 * a * c;
rootone = (discriminant) => {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of 1 quadratic equation are ${root1} and ${root2}`);
}

roottwo = () => {
    root1 = root2 = Number(-b / (2 * a));
    console.log(`The roots of 2 quadratic equation are ${root1} and ${root2}`);
}

rootthree = (discriminant) => {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    // result
    console.log(`The roots of 3 quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
// condition for real and different roots
function roots(discriminant) {

    discriminant > 0 ? rootone(discriminant): (discriminant == 0 )? roottwo():rootthree(discriminant)

    // if (discriminant > 0) {
    //     rootone(discriminant)
    // }

    // // condition for real and equal roots
    // else if (discriminant == 0) {
    //     roottwo()
    // }

    // // if roots are not real
    // else {
    //     rootthree(discriminant)
    // }
}


roots(discriminant(a, b, c))


// roots()
// Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// Operand of an argument is NaN (e.g. 7 ** NaN)
// Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)