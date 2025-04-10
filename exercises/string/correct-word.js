// every letter in a word needs to be changed to next letter to get the right word.
// For example 'zms', next letters of z,m,s is a,n,t, So the correct word is 'ant'.

function myFunction(str) {
  if (!str) {
    return;
  }
  return [...str]
    .map((char) => {
      // If char is 'z', wrap around to 'a'
      return char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
    })
    .join("");
}

console.log(myFunction("zms"));
