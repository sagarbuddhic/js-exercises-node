// leetcode27

const removeElement = (nums, val) => {
  const index = nums.indexOf(val);
  if (index > -1) {
    nums.splice(index, 1);
  }
  return nums;
};

const removeAllReferencesElement = (nums, val) => {
  return nums.filter((el) => el !== val);
};

const output = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log("output", output);
