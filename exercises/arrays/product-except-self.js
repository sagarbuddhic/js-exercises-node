// Given an integer array nums,
// return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// leetcode238

const productExceptSelf = (nums) => {
  let result = [];
  let leftProd = 1;
  let rightProd = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProd;
    leftProd *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProd;
    rightProd *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([2, 5, 10, 20]));
// [1000, 400, 200, 100]
