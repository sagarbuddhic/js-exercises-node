// Check if closing and opening brackets are in sequence.
// Example - {([])} - correct sequence.
// {{[} - wrong sequence.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

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
