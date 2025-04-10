const groupAnagrams = (inputArr) => {
  let groupMapping = new Map();

  inputArr.forEach((inputVal) => {
    let sorted = [...inputVal].sort().join("");
    let setVal = groupMapping.has(sorted)
      ? [...groupMapping.get(sorted), inputVal]
      : [inputVal];
    groupMapping.set(sorted, setVal);
  });

  return Array.from(groupMapping.values());
};

const inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(inputArr));
