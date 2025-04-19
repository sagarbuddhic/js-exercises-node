// Given an array of integers and alphabets, seperate and sort them and return.
// Example: [2, "b", 4, "d", 3, "a", "c", "e", 5, 1].
// Output:
//[
//  1,   2,   3,   4,   5,
//  'a', 'b', 'c', 'd', 'e'
//]
function seperateNumAlph(input) {
    let numbers = [];
    let alphabets = [];
    let output = [];

    numbers = input.filter(value => typeof (value) == 'number');
    alphabets = input.filter(value => typeof (value) == 'string');
    output = [...numbers.sort(), ...alphabets.sort()];

    return output;
}

let sorted = seperateNumAlph([2, "b", 4, "d", 3, "a", "c", "e", 5, 1]);
console.log(sorted);