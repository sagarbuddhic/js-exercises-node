// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// leetcode128

const longestConsecutive = (nums) => {
  // Put all numbers in a Set for O(1) lookups
  const numSet = new Set(nums);
  let longestStreak = 0;

  // Loop through each number
  for (const num of nums) {
    // Only start counting if 'num' is the start of a sequence
    // i.e., num - 1 doesn't exist in the set
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Keep moving forward as long as consecutive numbers exist
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update the maximum streak found so far
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
