// leetcode66

const plusOne = (digits) => {
  let n = digits.length - 1;
  while (n >= 0) {
    if (digits[n] === 9) {
      digits[n] = 0;
      n--;
    } else {
      digits[n] += 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 1]));
