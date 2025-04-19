// Given an number find out if it is an integer.
// Example 1.5, output: false.
const value = process.argv.slice(2);

const isInt = value % 1 === 0;

console.log(`is it integer: ${isInt}`);
