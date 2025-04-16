// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
// Returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return [...str1].sort().join() == [...str2].sort().join();
}

console.log(isAnagram("below", "elbow"));
