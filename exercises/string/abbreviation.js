const validAbbreviation = (word, abbr) => {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (/\d/.test(abbr[j])) {
      if (abbr[j] === "0") {
        return false;
      }
      let num = "";
      while (j < abbr.length && !isNaN(parseInt(abbr[j], 10))) {
        num += abbr[j++];
      }
      i += Number(num);
    } else if (word[i++] !== abbr[j++]) {
      return false;
    }
  }

  return i === word.length && j === abbr.length;
};

console.log(
  validAbbreviation("internationalization", "i12ization") ? "true" : "false"
);
