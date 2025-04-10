// leetcode26

const removeDuplicatesFromSortedArray = (nums) => {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; // new length
};

let nums = [1, 1, 2, 2, 3];
let length = removeDuplicatesFromSortedArray(nums);

console.log(length); // Output: 3
console.log(nums.slice(0, length)); // Output: [1, 2, 3]
