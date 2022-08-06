function emptyStringToNull(obj) {
    let output = obj;
    for ([key, value] of Object.entries(output)) {
        if (output[key].trim().length == 0) {
            output[key] = null;
        }
    }
    return output;
}

console.log(emptyStringToNull({ 1: 'ww', 2: ' ', 3: 'sss', 4: '' }));
