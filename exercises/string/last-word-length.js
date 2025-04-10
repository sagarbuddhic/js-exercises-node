//  Length of Last Word
// leetcode58

const getLastWordLength = (s) => {
  let temp = s.trim().split(" ");
  return temp[temp.length - 1].length;
};

console.log(getLastWordLength("Hello World"));
