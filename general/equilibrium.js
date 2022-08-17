// Given an array of integers, find out if the sum of left subset of array is equal to the right set of sum.
// Example : [-7, 1, 5, 2, -4, 3, 0], Output: 3
function getEquiIndex(arr) {
    let equi = -1;
    let leftSum, rightSum;
    let intArr = arr.map((value) => parseInt(value));

    for (let i = 0; i < intArr.length; i++) {
        leftSum = 0;
        rightSum = 0;
        for (let j = 0; j < i; j++)
            leftSum += intArr[j];

        for (let j = intArr.length - 1; j > i; j--)
            rightSum += intArr[j];

        if (rightSum === leftSum) {
            equi = i;
            break;
        }
    }
    return equi;
}

let arr = [-7, 1, 5, 2, -4, 3, 0];
let equi = getEquiIndex(arr);
console.log(equi);