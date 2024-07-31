// A string is said to be palindrome if it remains the same on reading from both ends
// leetcode125
function isPalindrome(input) {
  let arr = input.split("");
  return arr.reverse().join("") == input;
}

console.log(isPalindrome("kayak"));
