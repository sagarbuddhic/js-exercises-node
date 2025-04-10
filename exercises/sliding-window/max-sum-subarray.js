//leetcode53 subarray with the largest sum

const findMaxSumSubarray = (arr, k) => {
  let maxValue = Number.MIN_VALUE;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (i >= k - 1) {
      maxValue = Math.max(maxValue, sum);
      sum -= arr[i - (k - 1)];
    }
  }
  return maxValue;
};

console.log(findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
