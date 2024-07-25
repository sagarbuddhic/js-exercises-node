// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
//  return the researcher's h-index.
// leetcode274

const hIndex = (citations) => {
  const co = citations.sort((a, b) => b - a);
  let n = 0;

  for (let i = 0; i < co.length; i++) {
    if (co[i] > i) {
      n++;
    }
  }
  return n;
};

console.log(hIndex([3, 0, 6, 1, 5]));
