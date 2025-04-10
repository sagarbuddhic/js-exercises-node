//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const getIndices = (nums, target) => {
  let arrMap = new Map();

  nums.forEach((val, ind) => {
    arrMap.set(val, ind);
  });

  for (i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (arrMap.has(rem) && arrMap.get(rem) != i) {
      return [i, arrMap.get(rem)];
    }
  }
};

console.log(getIndices([2, 7, 11, 15], 9));
