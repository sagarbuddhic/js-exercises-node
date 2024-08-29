// leetcode22

const generateParenthesis = (n) => {
  let stack = [];
  let res = [];

  function backtrack(open, close) {
    console.log("open", open);
    if (open === close && n === close) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return res;
};

console.log(generateParenthesis(3));
