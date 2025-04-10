// leetcode20

// Check if closing and opening brackets are in sequence.
// Example - {([])} - correct sequence.
// {{[} - wrong sequence.

import Stack from "../data-structures/stack.js";

function isCorrectSequence(input) {
  if (!input) {
    return "";
  }

  //   let tempArr = [];
  let stack = new Stack();
  let open = "{[(";
  let close = "}])";

  const everyValue = [...input].every((value) => {
    let stackTop = stack.peek();
    if (open.includes(value)) {
      stack.push(value);
      return true;
    } else if (
      close.includes(value) &&
      ((value == "}" && stackTop == "{") ||
        (value == "]" && stackTop == "[") ||
        (value == ")" && stackTop == "("))
    ) {
      stack.pop();
      return true;
    } else {
      return false;
    }
  });

  if (everyValue && stack.isEmpty()) {
    return "valid";
  }
  return "invalid";
}

console.log(isCorrectSequence("{([])}"));
