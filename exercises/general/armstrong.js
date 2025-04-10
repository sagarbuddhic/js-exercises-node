// An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
// Example 153 = 1(cube) + 5(cube) + 3(cube)
function isArmstrongNumber(input) {
    let number = input + '';
    let power = number.length;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += Math.pow(parseInt(input[i]), power);
    }
    return sum == input;
}

console.log(isArmstrongNumber('153'));