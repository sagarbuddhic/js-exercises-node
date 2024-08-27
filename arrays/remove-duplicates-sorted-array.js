// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.
// leetcode26

const removeDuplicatesFromSortedArray = (nums) => {
  let count = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[count - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeDuplicatesFromSortedArray([1, 1, 2, 2, 3, 3, 3, 4, 5]));
