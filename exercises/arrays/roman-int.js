// leetcode13

const romanToInt = (s) => {
  let mapped = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  return [...s].reduce((acc, curr, ind, arr) => {
    let currVal = mapped[curr];
    let nextVal = mapped[arr[ind + 1]] || 0; // next char or 0
    return currVal < nextVal ? acc - currVal : acc + currVal;
  }, 0);
};

console.log(romanToInt("MCMXCIV")); // 1994 (1000 + 900 + 90 + 4)
