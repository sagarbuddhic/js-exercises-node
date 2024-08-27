//leetcode11

const mostWater = (height) => {
  let res = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, area);

    if (height[left] < height[right]) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }
  return res;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
