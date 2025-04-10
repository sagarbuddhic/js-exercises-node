// leetcode290

const wordPattern = (pattern, s) => {
  let words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  let mapWord = new Map();
  let mapPattern = new Map();

  for (let i = 0; i < words.length; i++) {
    let valWord = words[i];
    let valPattern = pattern[i];
    if (
      (mapWord.has(valWord) && mapWord.get(valWord) !== pattern[i]) ||
      (mapPattern.has(valPattern) && mapPattern.get(valPattern) !== words[i])
    ) {
      return false;
    }
    mapWord.set(words[i], pattern[i]);
    mapPattern.set(pattern[i], words[i]);
  }

  return true;
};

let pattern = wordPattern("abba", "dog cat cat fish");

console.log("final", pattern);
