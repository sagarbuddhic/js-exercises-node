// Given an array of n distinct elements and a number x, arrange array elements according to the absolute difference with x,

function sortDiff(input) {
    let mapped = input.map((value) => {
        return { 'val': value, 'diff': Math.abs(7 - value) };
    });
    mapped.sort((a, b) => a.diff - b.diff);
    let sorted = mapped.map((value) => value.val);
    return sorted;
}

let sorted = sortDiff([10, 5, 3, 9, 2]);
console.log(sorted);