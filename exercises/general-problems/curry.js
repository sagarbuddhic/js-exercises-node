function curry() {
  let a = 0;
  return function adder(b) {
    if (!b) {
      return a;
    }
    a += b;
    return adder;
  };
}

let curriedSum = curry();

console.log(curriedSum(1)(2)(3)(4)());
