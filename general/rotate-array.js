
function rotateArray (values, count) {
    let index = 0;
    while(index < count) {
        let value = values.pop();
        values.unshift(value);
        index += 1;
    }
  return values;
}

const rotated = rotateArray(process.argv.slice(2), 2);
console.log(rotated);