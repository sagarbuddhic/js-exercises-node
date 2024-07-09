// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = (s) => {
  let mapped = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  return [...s].reduce((acc, curr, ind, arr) => {
    console.log("curr", curr);
    console.log("acc", acc);
    if (ind < arr.length - 1 && mapped[curr] < mapped[arr[ind + 1]]) {
      return acc - mapped[curr];
    } else {
      return acc + mapped[curr];
    }
  }, 0);
};

console.log(romanToInt("MCMXCIV"));
