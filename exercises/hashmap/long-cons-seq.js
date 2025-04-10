// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// leetcode128

const longestConsecutive = (nums) => {
  let set = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length += 1;
        longest = Math.max(length, longest);
      }
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
