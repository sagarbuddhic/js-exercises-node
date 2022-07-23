let fibonacci = (function () {
  let index = 0;
  let series = [];
  return function generator(count) {
    if (index === 0) {
      series.push(0);
      series.push(1);
      index += 2;
      generator(count);
    } else if (index < count) {
      let nextValue = series[index - 1] + series[index - 2];
      series.push(nextValue);
      index += 1;
      generator(count);
    }

    return series;
  };
})();

let series = fibonacci(process.argv.slice(2)[0]);

console.log(series);
