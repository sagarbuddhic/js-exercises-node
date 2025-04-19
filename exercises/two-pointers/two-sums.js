// two sums - input array is sorted
// leetcode167

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) return [left, right];

    if (sum < target) left++;

    if (sum > target) right--;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

// var twoSumAlternative = function (numbers, target) {
//   let pt1 = 0;
//   let pt2 = numbers.length - 1;
//   let total = numbers[pt1] + numbers[pt2];
//   while (total !== target) {
//     if (total > target) {
//       pt2--;
//     } else {
//       pt1++;
//     }
//     total = numbers[pt1] + numbers[pt2];
//   }
//   return [pt1 + 1, pt2 + 1];
// };
