const test = [1, 2, 2, 1, 3, 4, 4];

// Given an array of integers which contains all values in sets, except an odd one.
// // Example [4, 2, 4, 2, 5, 3, 5], Output: 3
// function filterDistinct(value, index, values) {
//   return values.indexOf(value) === index;
// }

// function odd(values) {
//   const distinct = [...new Set(values)];
//   let oddOne;
//   distinct.some((value) => {
//     if (values.indexOf(value) === values.lastIndexOf(value)) {
//       oddOne = value;
//       return true;
//     }
//     return false;
//   });
//   return oddOne;
// }

function odd(values) {
  const counts = {};
  for (let val of values) {
    counts[val] = (counts[val] || 0) + 1;
  }
  for (let val in counts) {
    if (counts[val] === 1) return Number(val); // or val as string
  }
}

console.log(odd(test));
