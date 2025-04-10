// leetcode1

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    let diff = target - currVal;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(currVal, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
