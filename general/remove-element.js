// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
//  The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

const removeElement = (nums, val) => {
  //   let index = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != val) {
  //       nums[index] = nums[i];
  //       index++;
  //     }
  //   }
  //   console.log(nums);
  //   return index;

  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};

const output = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log("output", output);
