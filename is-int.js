const value = process.argv.slice(2);

const isInt = value % 1 === 0;

console.log(`is it integer: ${isInt}`);
