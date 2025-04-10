function findKthLargest(nums, k) {
  const indexToFind = nums.length - k;

  function quickSelect(left, right) {
    const pivot = nums[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
        pivotIndex++;
      }
    }

    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    if (pivotIndex === indexToFind) {
      return nums[pivotIndex];
    } else if (pivotIndex < indexToFind) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  }

  return quickSelect(0, nums.length - 1);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // ➤ 5
