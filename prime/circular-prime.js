function isPrime(input) {
    let divider = 2;
    while (divider < input) {
        if (input % divider === 0)
            break;
        divider++;
    }
    if (divider == input)
        return true;

    return false;
}

function isPrimeUsingArray(input) {
    let isPrime = [...Array(input - 1).keys()].every((divider) => {
        if (divider > 1 && input % divider === 0) {
            return false;
        }
        return true;
    });
    return isPrime;
}

function circularPrime(n) {
    let primeNumbers = [];
    for (let i = 2; i < n; i++) {
        if (isPrimeUsingArray(i) && isPrime([...i.toString()].reverse().join(''))) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(circularPrime(1000));