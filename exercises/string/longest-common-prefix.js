// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// leetcode14

var longestCommonPrefix = function (inputStr) {
  if (inputStr.length == 0) {
    return "";
  }

  if (inputStr.length == 1) {
    return inputStr[0];
  }

  inputStr.sort();
  let matchingString = "";

  for (let i = 0; i < inputStr[0].length; i++) {
    if (inputStr[0][i] == inputStr[inputStr.length - 1][i]) {
      matchingString = matchingString + inputStr[0][i];
    } else {
      return matchingString;
    }
  }

  return matchingString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
