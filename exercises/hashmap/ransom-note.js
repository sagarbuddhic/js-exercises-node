//leetcode383 ransom note

const canConstruct = (ransomNote, magazine) => {
  let map = new Map();
  [...ransomNote].forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  });
  console.log("ransom", map);
  for (let i = 0; i < magazine.length; i++) {
    let val = magazine[i];
    if (map.has(val)) {
      let count = map.get(val);
      if (count > 1) {
        map.set(val, count - 1);
      } else {
        map.delete(val);
      }
    }
  }
  if (map.size === 0) {
    return true;
  }
  return false;
};

console.log(canConstruct("aab", "baa"));
