const biggestNumber = (numbers) => {
  numbers.sort((a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    const ab = `${aString}${bString}`;
    const ba = `${bString}${aString}`;

    console.log(ab);

    return ba - ab;
  });
  return numbers.join("");
};

let big = biggestNumber(process.argv.slice(2));
console.log(big);
