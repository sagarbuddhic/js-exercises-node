// you are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      console.log("i val", nums1[i]);
      nums1[k--] = nums1[i--];
    } else {
      console.log("j val", nums2[j]);
      nums1[k--] = nums2[j--];
    }
  }

  console.log("num1", nums1);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
