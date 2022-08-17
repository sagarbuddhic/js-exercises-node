// Given a number as input, rotate an array that number of times.
// Example: [1, 2, 3, 4], Output: [3, 4, 1, 2]
function rotateArray(values, count) {
  let index = 0;
  while (index < count) {
    let value = values.pop();
    values.unshift(value);
    index += 1;
  }
  return values;
}

const rotated = rotateArray([1, 2, 3, 4], 2);
console.log(rotated);