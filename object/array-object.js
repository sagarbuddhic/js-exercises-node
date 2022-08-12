function arrayToObject(arr) {
    return arr.reduce((obj, curr) => {
        obj[curr] = obj[curr] == undefined ? 1 : obj[curr] + 1;
        return obj;
    }, {});
}

console.log(arrayToObject([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]));