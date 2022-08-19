https://stackoverflow.com/questions/29321063/all-valid-combinations-of-n-pair-of-parenthesis

function getBracketsCombinations(n) {
    if (n == 0) {
        return [''];
    }

    var result = [];
    for (var i = 0; i < n; ++i) {
        var lefts = getBracketsCombinations(i);
        var rights = getBracketsCombinations(n - i - 1);

        for (var j = 0; j < lefts.length; ++j)
            for (var k = 0; k < rights.length; ++k) {
                console.log(`lefts ${lefts[j]}`);
                console.log(`rights ${rights[k]}`);
                let test = "(" + lefts[j] + ")" + rights[k];
                // console.log(test);
                result.push(test);
            }
    }
    return result;
}

console.log(getBracketsCombinations(4));