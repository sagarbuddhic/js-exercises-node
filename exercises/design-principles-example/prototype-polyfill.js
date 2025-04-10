if (!Array.prototype.reduceTemp) {
  Array.prototype.reduceTemp = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }

    let array = this;
    let length = array.length;
    let accumulator = initialValue !== undefined ? initialValue : array[0];

    for (let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }
    return accumulator;
  };
}

let output = test.reduceTemp((prev, curr) => {
  return prev + curr;
}, 0);

console.log(output);
