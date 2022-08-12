const filterDistinct = (value, index, arr) => {
  return arr.indexOf(value) === index;
};

const distinctNumbers = (numbers) => {
  return numbers.filter(filterDistinct);
};

const distinct = distinctNumbers(process.argv.slice(2));

console.log(distinct);
