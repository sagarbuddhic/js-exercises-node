let unsorted = process.argv.slice(2);

unsorted.sort((a, b) => a - b);
console.log(`ascending ${unsorted}`);
unsorted.sort((a, b) => b - a);
console.log(`descending ${unsorted}`);
