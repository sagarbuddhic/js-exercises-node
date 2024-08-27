// Given an array of integers, find out if there is any value which is majority.
// Example [4, 4, 1, 2, 3, 4, 4], Output: 4
// leetcode169

function findMajority(arr) {
  let map = new Map();
  let majority;
  let count = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    let setValue = map.has(arr[i]) ? map.get(arr[i]) + 1 : 1;
    map.set(arr[i], setValue);

    if (setValue > count) {
      majority = arr[i];
      break;
    }
  }

  return majority;
}

let majority = findMajority(process.argv.slice(2));
console.log(majority);
