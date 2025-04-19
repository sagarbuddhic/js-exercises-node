// Given array of integers, find the biggest sum when two or more array elements are added.
// Elements can be negative.
// Example: [3, 2, -6, 4, 0] - biggest sum - 5
function maxSum(values) {
  if (values.length < 2) {
    return values[0];
  }
  let bigSlice = [];
  let sum = values[0] + values[1];

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      let sliced = values.slice(i, j + 1);
      let sumed = sliced.reduce((prev, curr) => {
        return prev + curr;
      });
      if (sumed > sum) {
        bigSlice = [];
        bigSlice.push(sliced);
        sum = sumed;
      }
    }
  }
  return { slice: bigSlice, sum: sum };
}

let max = maxSum([3, 1, 6, -4, 0]);

console.log(max);
