// leetcode13

const romanToInt = (s) => {
  let mapped = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  return [...s].reduce((acc, curr, ind, arr) => {
    if (ind < arr.length - 1 && mapped[curr] < mapped[arr[ind + 1]]) {
      return acc - mapped[curr];
    } else {
      return acc + mapped[curr];
    }
  }, 0);
};

console.log(romanToInt("MCMXCIV"));
