const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const product = numbers[i];
    const result = product * product;
    output.push(result);
}
console.log(output);