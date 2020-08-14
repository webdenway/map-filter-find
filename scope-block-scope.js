// let bonus = 20;

// function sum(first, second) {
//     let result = first + second + bonus;
//     console.log(bonus);
//     return result;

// }

// const output = sum(3, 7);
// console.log(bonus);
// console.log(output);

let globalVar = "this is global variable" //global scope

// local variable-- function scope

function myFunction() {
    let localVar = "This is local variable"; //let-block scope. var- function scopeS

    console.log(globalVar);


    if (true) {
        let insideIf = "i am inside if"
        console.log(insideIf);
    }
    console.log(insideIf);
}


// console.log(localVar);
myFunction()