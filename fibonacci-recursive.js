let fibonacci = (function () {
  let nextIndex = 2;
  let series = [0, 1];
  return function generator(count) {
    if (nextIndex < count) {
      nextValue = series[nextIndex - 1] + series[nextIndex - 2];
      series.push(nextValue);
      nextIndex += 1;
      generator(count);
    }
    return series;
  };
})();

let series = fibonacci(process.argv.slice(2));

console.log(series);
