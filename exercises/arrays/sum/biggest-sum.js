// Given array of integers, find the biggest sum when two or more array elements are added.
// Elements can be negative.
// leetcode53 - Maximum Subarray

function maxSum(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
}

// output 6
let max = maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(max);
