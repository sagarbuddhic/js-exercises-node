// Filter distinct numbers in an array
// Example: [1, 2, 2, 3, 3, 4]
// [1, 2, 3, 4]
const filterDistinct = (value, index, arr) => {
  return arr.indexOf(value) === index;
};

const distinctNumbers = (numbers) => {
  return numbers.filter(filterDistinct);
};

const distinct = distinctNumbers(process.argv.slice(2));

console.log(distinct);

let arr = [1, 3, 2];

console.log(new Set(arr));

console.log([...new Set(arr)]);
