//leetcode11

const mostWaterContainer = (inputArr) => {
  let left = 0;
  let right = inputArr.length - 1;
  let res = 0;

  while (left < right) {
    let area = (right - left) * Math.min(inputArr[left], inputArr[right]);
    res = Math.max(area, res);

    if (inputArr[left] < inputArr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(mostWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
