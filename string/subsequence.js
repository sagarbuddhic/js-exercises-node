// subsequence
// leetcode392

var isSubsequence = (s, t) => {
  let spt = 0;
  let tpt = 0;

  while (spt < s.length && tpt < t.length) {
    if (s[spt] === t[tpt]) {
      spt++;
    }
    tpt++;
  }
  return spt === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
