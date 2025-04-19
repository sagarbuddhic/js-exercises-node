// Given a square matrix, turn it by 90 degrees in clockwise direction.
// Example
// Input: [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//];
// Output: [
//     [ 6, 3, 0 ],
//     [ 7, 4, 1 ],
//     [ 8, 5, 2 ]
//]; 
function clockwise(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(`i ${i}, j ${j}, ${input[i][j]}`);
            let temp = input[i][j];
            input[i][j] = input[j][i];
            input[j][i] = temp;
        }
    }
    let output = input.map(value => value.reverse());
    return output;
}

let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
];
let ouput = clockwise(m);
console.log(ouput);
