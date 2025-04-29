const getKthLargestElement = (nums, k) => {
  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let ans = low;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = nums.filter((n) => n >= mid).length;

    if (count >= k) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

console.log(getKthLargestElement([11, 5, 12, 9, 44, 17, 2], 3));
// for kth smallest element it will (arr.length - k) + 1.
