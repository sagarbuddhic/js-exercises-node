//leetcode150

import Stack from "../data-structures/stack.js";

const evaluateReversePolish = (tokens) => {
  let stack = [];
  for (const token of tokens) {
    let first;
    let second;

    if (["+", "-", "*", "/"].includes(token)) {
      first = parseInt(stack.pop());
      second = parseInt(stack.pop());
    }
    switch (token) {
      case "+":
        stack.push(first + second);
        break;
      case "-":
        stack.push(second - first);
        break;
      case "*":
        stack.push(second * first);
        break;
      case "/":
        stack.push(parseInt(second / first));
        break;
      default:
        stack.push(parseInt(token));
    }
  }
  return stack[0];
};

console.log(
  evaluateReversePolish([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ])
);
