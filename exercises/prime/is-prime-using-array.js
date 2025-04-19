function isPrimeUsingArray(input) {
  let isPrime = [...Array(input - 1).keys()].every((divider) => {
    if (divider > 1 && input % divider === 0) {
      return false;
    }
    return true;
  });
  return isPrime;
}

export default isPrimeUsingArray;
