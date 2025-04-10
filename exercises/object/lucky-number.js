// Given an array of integers, find the number which occurs as many times the number itself.
// Return the largest number, If there are more than one.
// Example: [1, 2, 2, 3, 3, 3], Output 3
function getLuckyNumber(arr) {
  let res = [];
  let countObj = arr.reduce((obj, curr) => {
    obj[curr] = obj[curr] == undefined ? 1 : obj[curr] + 1;
    return obj;
  }, {});

  for ([key, value] of Object.entries(countObj)) {
    if (key == value) {
      res.push(value);
    }
  }

  if (res && res.length > 0) {
    res.sort((a, b) => b - a);
    return res[0];
  }
  return -1;
}

console.log(getLuckyNumber([1, 2, 3, 3, 3, 2]));
