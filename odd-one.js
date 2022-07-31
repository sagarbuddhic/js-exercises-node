const test = [1, 2, 2, 1, 3, 4, 4];

function filterDistinct(value, index, values) {
  return values.indexOf(value) === index;
}

function filterOdd(value, index, values) {
  return values.indexOf(value) === values.lastIndexOf();
}

function odd(values) {
  const distinct = values.filter(filterDistinct);
  let oddOne;
  distinct.some((value) => {
    if (values.indexOf(value) === values.lastIndexOf(value)) {
      oddOne = value;
      return true;
    }
    return false;
  });
  return oddOne;
}

console.log(odd(test));
