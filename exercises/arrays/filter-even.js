// Given a list of numbers filter the even numbers
// Example: [1, 2, 3, 4] Output: [2, 4]
const list = process.argv.slice(2);

let even = list.filter((number) => number % 2 === 0);

console.log(`even values ${even}`);
