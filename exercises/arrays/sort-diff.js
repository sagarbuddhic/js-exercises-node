// Given an array of n distinct elements and a number x, arrange array elements according to the absolute difference with x,
// Example: [10, 5, 3, 9, 2], Output: [ 5, 9, 10, 3, 2 ]
function sortDiff(input, number) {
    let mapped = input.map((value) => {
        return { 'val': value, 'diff': Math.abs(number - value) };
    });
    mapped.sort((a, b) => a.diff - b.diff);
    return mapped.map((value) => value.val);
}

let sorted = sortDiff([10, 5, 3, 9, 2], 7);
console.log(sorted);