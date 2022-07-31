let checkPrime = (function () {
  let divider = 1;
  return function checkPrime(input) {
    divider += 1;
    if (input % divider === 0) {
      return false;
    }

    if (divider < input) {
      checkPrime(input);
    }

    return true;
  };
})();

let intValue = parseInt(process.argv.slice(2)[0]);

console.log(`is Prime:`, checkPrime(intValue));
