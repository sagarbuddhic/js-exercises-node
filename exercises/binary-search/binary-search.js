// leetcode 704 - binary search

let doesExist = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor(right + left / 2);

    if (arr[middle] == val) {
      return middle;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

const output = doesExist([-1, 0, 3, 5, 9, 12], 12);

console.log(output);
