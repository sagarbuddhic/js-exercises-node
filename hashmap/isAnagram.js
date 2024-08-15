//leetcode242 ransom note

const isAnagram = (s, t) => {
  let map = new Map();
  [...s].forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
    isAnagram;
  });

  for (let i = 0; i < t.length; i++) {
    let val = t[i];
    if (map.has(val)) {
      let count = map.get(val);
      if (count > 1) {
        map.set(val, count - 1);
      } else {
        map.delete(val);
      }
    } else {
      return false;
    }
  }
  if (map.size === 0) {
    return true;
  }
  return false;
};

console.log(isAnagram("anagram", "nagarams"));
