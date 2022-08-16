// swap key values into another object.
function swapKeyValues(obj) {
    let output = {};
    for ([key, value] of Object.entries(obj)) {
        output[value] = key;
    }
    return output;
}

console.log(swapKeyValues({ 'asia': 1, 'australia': 2 }));