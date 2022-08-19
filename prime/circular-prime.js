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

function circularPrime(n) {
    let primeNumbers = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i) && isPrime([...i.toString()].reverse().join(''))) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

console.log(circularPrime(100));