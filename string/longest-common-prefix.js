//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  strs.sort();

  if (strs.length === 1) {
    return strs[0];
  }

  let matchingString = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      matchingString = matchingString + strs[0][i];
    } else {
      return matchingString;
    }
  }
  return matchingString;

  //   if(!strs.length) return ''
  //     let prefix=strs[0]
  //     for(word of strs){
  //         while(word.indexOf(prefix)!==0){
  //             prefix=prefix.slice(0,-1)
  //         }
  //     }
  //     return prefix
};

console.log(longestCommonPrefix(["ab", "a"]));
