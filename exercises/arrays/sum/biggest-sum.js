// Given array of integers, find the biggest sum when two or more array elements are added.
// Elements can be negative.
// Example: [3, 2, -6, 4, 0] - biggest sum - 5

function maxSum(nums) {
  let maxSum = -Infinity;

  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end]; // build sum on the fly
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// output 6
let max = maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(max);
