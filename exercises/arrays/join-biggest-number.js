// join array of numbers to form the biggest number.
// Example: [54, 546, 548, 60]
const biggestNumber = (numbers) => {
  numbers.sort((a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    const ab = `${aString}${bString}`;
    const ba = `${bString}${aString}`;

    return ba - ab;
  });
  return numbers.join("");
};

let big = biggestNumber([54, 546, 548, 60]);
console.log(big);
