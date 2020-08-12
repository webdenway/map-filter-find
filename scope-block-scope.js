// let bonus = 20;

// function sum(first, second) {
//     let result = first + second + bonus;
//     console.log(bonus);
//     return result;

// }

// const output = sum(3, 7);
// console.log(bonus);
// console.log(output);

var globalVar = "this is global variable" //global scope

// local variable-- function scope

function myFunction() {
    var localVar = "This is local variable";
    console.log(localVar);
}