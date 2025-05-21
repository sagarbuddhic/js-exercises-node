// kodane algorithm - sum of the contiguous subarray within a one-dimensional array of numbers that has the largest sum.
// Example: [-1, -2, -3, -4] , Output -1
function kodaneAlgorithm(nums) {
  let currentMax = nums[0];
  let maxSoFar = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

console.log(kodaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
