// leetcode209 Sliding Window
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

const smallestSubarray = (arr, targetSum) => {
  let minWin = Number.MAX_VALUE;
  let start = 0;
  let currWindowSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currWindowSum += arr[end];

    while (currWindowSum >= targetSum) {
      minWin = Math.min(minWin, end - start + 1);
      currWindowSum -= arr[start];
      start++;
    }
  }

  if (minWin === Number.MAX_VALUE) {
    return 0;
  }

  return minWin;
};

console.log(smallestSubarray([2, 3, 1, 2, 4, 3], 25));
