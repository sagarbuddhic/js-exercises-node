// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (input) => {
  if (input < 3) {
    return input;
  }

  let prev = 1;
  let curr = 2;

  for (i = 3; i <= input; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
};

const ways = climbStairs(process.argv[2]);

console.log("number of ways: ", ways);
