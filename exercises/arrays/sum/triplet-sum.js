// check if there is triplet elements in an array whose sum is equal to the input total.
// Example ([12, 3, 4, 1, 6, 9], 24) - 12, 3, 9 - 24

const tripletSum = (inputArr, target) => {
  let output = [];

  for (let i = 0; i < inputArr.length - 2; i++) {
    for (let j = i + 1; j < inputArr.length - 1; j++) {
      for (let k = j + 1; k < inputArr.length; k++) {
        let sum = inputArr[i] + inputArr[j] + inputArr[k];
        if (sum === target) {
          output.push(inputArr[i], inputArr[j], inputArr[k]);
          break;
        }
      }
    }
  }

  return output;
};

let output = tripletSum([12, 3, 4, 1, 6, 9], 24);
console.log(output);
