// an unsorted array of integers, sort the array into a wave like array. 

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

let wave = waveSorted([20, 10, 8, 6, 4, 2]);
console.log(wave);