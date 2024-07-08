// Given an array of integers nums which is sorted in ascending order,
//  and an integer target, write a function to search target in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// [-1,0,3,5,9,12]

doesExist = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor(right + left / 2);

    if (arr[middle] == val) {
      return middle;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

const output = doesExist([-1, 0, 3, 5, 9, 12], 13);

console.log(output);
