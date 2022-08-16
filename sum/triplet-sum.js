// check if there is triplet elements in an array whose sum is equal to the input total.
// Example ([12, 3, 4, 1, 6, 9], 24) - 12, 3, 9 - 24
function tripletSum(arr, total) {
    let output = [];
    console.log(arr);
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                if (sum == total) {
                    output.push(arr[i], arr[j], arr[k]);
                    break;
                }
            }
        }
    }
    return output;
}

let output = tripletSum([12, 3, 4, 1, 6, 9], 24);
console.log(output);