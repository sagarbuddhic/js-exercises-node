//Given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Input: nums = [2,3,1,1,4]
// Output: true

//Input: nums = [3,2,1,0,4]
// Output: false

// leetcode55

const canJump = (nums) => {
  let can = false;
  let numsTemp = nums?.map((val) => parseInt(val));

  let length = numsTemp.length;
  let target = length - 1;

  for (i = length - 1; i >= 0; i--) {
    let maxJump = numsTemp[i];
    if (i + maxJump >= target) {
      target = i;
    }
  }

  return target === 0;

  //   for (i = 1; i <= parseInt(nums[0]); i++) {
  //     for (
  //       j = i;
  //       j > 0 && j < nums.length && parseInt(nums[j]) != 0;
  //       j = j + parseInt(nums[j])
  //     ) {
  //       if (j === nums.length - 1) {
  //         can = true;
  //         break;
  //       }
  //     }
  //     if (can) {
  //       break;
  //     }
  //   }
  //   return can;

  //   let maxReach = 0;

  //     for (let i = 0; i <= maxReach && i < nums.length; i++) {
  //         maxReach = Math.max(maxReach, i + nums[i]);
  //         if (maxReach >= nums.length - 1) return true;
  //     }

  //     return false;
};

const val = canJump(process.argv.slice(2));

console.log("can jump", val);
