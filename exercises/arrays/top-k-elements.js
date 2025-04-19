const getTopKFrequentElements = (nums, k) => {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sortedByValue = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let out = sortedByValue.slice(0, k).map((entry) => entry[0]);

  return out;
};

console.log(getTopKFrequentElements([1, 1, 1, 2, 2, 3], 2));
