// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

const sortColors = (nums) => {
  let red = 0,
    blue = 0,
    orange = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) red++;
    else if (nums[i] === 1) blue++;
    else if (nums[i] === 2) orange++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < red) nums[i] = 0;
    else if (i < blue + red) nums[i] = 1;
    else if (i < orange + blue + red) nums[i] = 2;
  }

  return nums;
};

console.log(sortColors([0, 1, 2, 0, 1, 2]));
