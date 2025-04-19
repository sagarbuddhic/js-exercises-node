//Given a positive integer n round the number to the next whole number having divisible by 5.
function round(input) {
    const rounded = Math.round(input / 5) * 5;
    return { nearestMultiple: rounded };
}

console.log(round(47));