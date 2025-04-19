// leetcode70

const climbStairs = (input) => {
  if (input <= 2) return input;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= input; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  return b;
};

const ways = climbStairs(3);

console.log("number of ways: ", ways);
