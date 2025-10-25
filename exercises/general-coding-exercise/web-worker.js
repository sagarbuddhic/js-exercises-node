onmessage = function (event) {
  const numbers = event.data;
  const sum = numbers.reduce((a, b) => a + b, 0);
  postMessage(sum);
};
