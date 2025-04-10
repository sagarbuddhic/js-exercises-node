// leetcode202

const isHappy = (n) => {
  let set = new Set();
  while (n != 1) {
    if (set.has(n)) {
      return false;
    } else {
      set.add(n);
      n = operate(n);
    }
  }
  return true;
};

const operate = (inp) => {
  let temp = 0;
  let sum = 0;
  while (inp > 0) {
    temp = parseInt(inp % 10);
    sum += temp * temp;
    inp = parseInt(inp / 10);
  }
  return sum;
};

console.log(isHappy(2));
