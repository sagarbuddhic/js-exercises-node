function sample(arr) {
  let seen = new Set();
  let dupOut = [];
  let nonDupOut = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      let duplicates = arr.filter((x) => x === arr[i]);
      if (duplicates.length > 1) {
        dupOut.push(...duplicates);
      } else {
        nonDupOut.push(...duplicates);
      }

      seen.add(arr[i]);
    }
  }

  return [...dupOut, ...nonDupOut];
}

console.log(sample([2, 3, 4, 2, 5, 4, 6, 7]));
// 2 2 4 4 3 5 6 7
