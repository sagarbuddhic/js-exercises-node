 var countPrimes = function(n) {
    let index = 3;
    let primes = [];
    return function rotateNumbers() {
      if (index <= n) {
        let loopingIndex = 2;
        while (loopingIndex <= index) {
          if (index === loopingIndex) {
            primes.push(index);
          }
          if (index % loopingIndex === 0) {
            break;
          }
          loopingIndex += 1;
        }
        index += 1;
        rotateNumbers();
      }
      return primes;
    }();
   
  };
  
  console.log(countPrimes(process.argv.slice(2)));