// two sums - input array is sorted
// leetcode167

var twoSum = function (numbers, target) {
  let pt1 = 0;
  let pt2 = numbers.length - 1;
  let total = numbers[pt1] + numbers[pt2];
  while (total !== target) {
    if (total > target) {
      pt2--;
    } else {
      pt1++;
    }
    total = numbers[pt1] + numbers[pt2];
  }
  return [pt1 + 1, pt2 + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
