// an unsorted array of integers, sort the array into a wave like array. 

function waveSorted(input) {
    let output = input;
    output.sort((a, b) => a - b);
    console.log(output);
    for (let i = 0; i < output.length - 1; i += 2) {
        if (output[i + 1]) {
            [output[i], output[i + 1]] = [output[i + 1], output[i]];
        }
    }
    return output;
}

let wave = waveSorted([3, 6, 5, 10, 7, 20]);
console.log(wave);