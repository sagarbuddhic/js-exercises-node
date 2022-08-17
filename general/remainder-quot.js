
// Find quotient and remainder by dividing an integer.

function quotRem(input, divider) {
    let quotient = parseInt(input / divider);
    let reminder = input % divider;
    return { 'quotient': quotient, 'reminder': reminder };
}

console.log(quotRem(57, 7));