// string with maximum length in an array of strings.

function maxString(arr) {
  if (!arr || !arr.length) {
    return;
  }

  return arr.reduce((prev, curr) => {
    return curr.length > prev.length ? curr : prev;
  });
}

console.log(maxString(["ddd", "dddddd", "dddd", "dddd", "dd"]));
