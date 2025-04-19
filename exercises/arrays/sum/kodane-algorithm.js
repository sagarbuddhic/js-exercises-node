// kodane algorithm - sum of the contiguous subarray within a one-dimensional array of numbers that has the largest sum.
// Example: [-1, -2, -3, -4] , Output -1
function kodaneAlgorithm(inputArr) {
  let currentMax = nums[0];
  let maxSoFar = nums[0];

  for (let i = 0; i < inputArr.length; i++) {
    currentMax = Math.max(inputArr[i], currentMax + inputArr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

console.log(kodaneAlgorithm([-1, -2, -3, -4]));
