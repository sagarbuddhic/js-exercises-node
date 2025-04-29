const groupAnagrams = (inputArr) => {
  let groupAnagrams = new Map();

  inputArr.forEach((inputVal) => {
    let sorted = [...inputVal].sort().join("");
    let mapVal = groupAnagrams.has(sorted)
      ? [...groupAnagrams.get(sorted), inputVal]
      : [inputVal];
    groupAnagrams.set(sorted, mapVal);
  });
  return Array.from(groupAnagrams.values());
};

const inputArr = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(inputArr));
