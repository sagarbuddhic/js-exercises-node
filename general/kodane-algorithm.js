function kodaneAlgorithm(arr) {
    let maximum;
    let maxArray;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // let tempArr = arr.slice(i, j + 1);
            // let sum = tempArr.reduce((add, curr) => {
            //     add = add + curr;
            //     return add;
            // }, 0);
            for (var k = i, sum = 0; k <= j; sum += arr[k++]);

            if (typeof maximum === 'undefined' || sum > maximum) {
                maximum = sum;
                // maxArray = tempArr;
            }
        }
    }
    return { maximum, maxArray };
}

console.log(kodaneAlgorithm([-1, -2, -3, -4]));