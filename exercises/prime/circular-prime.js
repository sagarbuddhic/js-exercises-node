import isPrime from "./is-prime.js";
import isPrimeUsingArray from "./is-prime-using-array.js";

function circularPrime(n) {
  let primeNumbers = [];
  for (let i = 2; i < n; i++) {
    if (isPrimeUsingArray(i) && isPrime([...i.toString()].reverse().join(""))) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

console.log(circularPrime(99));
