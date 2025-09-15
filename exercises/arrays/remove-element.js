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

Array.prototype.remove = function (value) {
  let index = this.indexOf(value);
  if (index > -1) this.splice(index, 1);
  return this;
};

let arr = [1, 2, 3];
arr.remove(2);
console.log(arr); // [1, 3]
