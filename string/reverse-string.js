// reverse string
// leetcode151

function reverseString(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseString("a good   example"));
