// Given an array of integers, find out the minimum number of swaps required to sort an array.
// Example: [2, 1, 4, 3], Output: 2
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function minSwaps(input) {
    let output = 0;
    let len = input.length;
    let sorted = input.slice();
    let map = new Map();

    sorted.sort();

    for (let i = 0; i < len; i++)
        map.set(input[i], i);

    for (let i = 0; i < len; i++) {
        if (input[i] != sorted[i]) {
            output++;
            let temp = input[i];
            swap(input, i, map.get(sorted[i]));

            map.set(temp, map.get(sorted[i]));
            map.set(sorted[i], i);
        }
    }

    return output;
}

let ans = minSwaps([2, 1, 4, 3]);
console.log(ans);