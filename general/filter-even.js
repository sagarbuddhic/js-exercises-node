const list = process.argv.slice(2);

let even = list.filter((number) => number % 2 === 0);

console.log(`even values ${even}`);
