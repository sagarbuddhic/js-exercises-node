function findKthLargest(nums, k) {
  let low = Math.min(...nums);
  let high = Math.max(...nums);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const count = nums.reduce((acc, num) => acc + (num >= mid ? 1 : 0), 0);

    if (count >= k) {
      x;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

console.log(findKthLargest([11, 5, 12, 9, 44, 17, 2], 3));
// for kth smallest element it will (arr.length - k) + 1.
