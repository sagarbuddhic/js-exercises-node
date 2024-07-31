//  Length of Last Word
// leetcode58

const getLastWordLength = (s) => {
  let splitArray = s.trim().split(" ");
  return splitArray[splitArray.length - 1].length;
};
