const response = (input) => {
  const newMap = new Map();
  let newArray = [];

  for (let i = 0; i < input.length; i++) {
    let sorted = [...input[i]].sort();
    let sortedOut = sorted.join("");

    if (newMap[sortedOut]) {
      let temp = newMap[sortedOut];
      temp.push(input[i]);
      newMap[sortedOut] = temp;
    } else {
      newMap[sortedOut] = [input[i]];
    }
  }

  for (const [key, value] of Object.entries(newMap)) {
    newArray.push(value);
  }

  return newArray;
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(response(input));
