//leetcode205

//Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = (s, t) => {
  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let valS = s[i];
    let valT = t[i];
    if (
      (mapS.has(valS) && mapS.get(valS) !== t[i]) ||
      (mapT.has(valT) && mapT.get(valT) !== s[i])
    ) {
      return false;
    }
    mapS.set(s[i], t[i]);
    mapT.set(t[i], s[i]);
  }

  return true;
};

console.log(isIsomorphic("foo", "bar"));
