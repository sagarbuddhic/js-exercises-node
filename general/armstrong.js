function isArmstrongNumber(input) {
    let number = input + '';
    let power = number.length;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += Math.pow(parseInt(input[i]), power);
    }
    return sum == input;
}

console.log(isArmstrongNumber('154'));