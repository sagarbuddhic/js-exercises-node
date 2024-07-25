// Given a number as input, rotate an array that number of times.
// Example: [1, 2, 3, 4], Output: [3, 4, 1, 2]
// leetcode 189
function rotateArray(nums, k) {
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  if (k === nums.length) return;
  if (k > nums.length) k = k % nums.length;
  nums.unshift(...nums.splice(-1 * k));
}

var rotateArray = function (nums, k) {
  let n = nums.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
};

const rotated = rotateArray([1, 2, 3, 4], 2);
console.log(rotated);
