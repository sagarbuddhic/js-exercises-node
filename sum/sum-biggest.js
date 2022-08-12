function maxSum(values) {
  if (values.length < 2) {
    return;
  }
  let sum = values[0] + values[1];
  for (let i = 0; i < values.length; i++) {
    for (let j = values.length - 1; j > i; j--) {
      let sliced = values.slice(i, j + 1);
      let sumed = sliced.reduce((prev, curr) => {
        return prev + curr;
      });
      if (sumed > sum) {
        sum = sumed;
      }
    }
  }
  return sum;
}

let max = maxSum([3, 2, -6, 4, 0]);

console.log(max);
