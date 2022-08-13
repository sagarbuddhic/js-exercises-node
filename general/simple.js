//Given a positive integer n round the number to the next whole number having divisible by 5.

function round(input) {
    const rounded = Math.round(input / 5) * 5;
    return { nearestMultiple: rounded };
}

console.log(round(47));

// Find quotient and remainder by dividing an integer in JavaScript

function quotRem(input, divider) {
    let quotient = parseInt(input / divider);
    let reminder = input % divider;
    return { 'quotient': quotient, 'reminder': reminder };
}

console.log(quotRem(57, 7));