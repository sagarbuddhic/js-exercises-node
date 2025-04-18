// leetcode22

const generateParenthesis = (n) => {
  let res = [];

  function backtrack(open, close, current) {
    if (open === close && n === close) {
      res.push(current);
      return;
    }

    if (open < n) {
      backtrack(open + 1, close, current + "(");
    }

    if (close < open) {
      backtrack(open, close + 1, current + ")");
    }
  }

  backtrack(0, 0, "");

  return res;
};

console.log(generateParenthesis(3));
