// An unsorted array of integers, sort the array into a wave like array. 
// Example: [3, 6, 5, 10, 7, 20] - wave Sorted - [ 5, 3, 7, 6, 20, 10 ]
function waveSorted(input) {
    let output = input;
    output.sort((a, b) => a - b);
    for (let i = 0; i < output.length - 1; i += 2) {
        if (output[i + 1]) {
            [output[i], output[i + 1]] = [output[i + 1], output[i]];
        }
    }
    return output;
}

let wave = waveSorted([3, 6, 5, 10, 7, 20]);
console.log(wave);