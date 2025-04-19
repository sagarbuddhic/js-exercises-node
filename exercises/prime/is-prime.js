function isPrime(input) {
  let divider = 2;
  while (divider <= Math.sqrt(input)) {
    if (input % divider === 0) {
      return false;
    }
    divider++;
  }
  return true;
}

console.log(isPrime(17));

export default isPrime;
