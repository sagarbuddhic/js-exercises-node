// reverse words.

function reverseString(sentence) {
  let words = sentence.split(" ");
  let reversed = words.map((word) => word.split("").reverse().join(""));
  return reversed.join(" ");
}

console.log(reverseString("abra cada ttta"));
