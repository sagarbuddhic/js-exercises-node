function nonRepsubString(str) {
    let currString = [];
    let longest = '';
    let maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        const currIndex = currString.indexOf(str[i]);

        if (currIndex !== -1) {
            console.log(currIndex);
            console.log(currString);
            currString.splice(0, currIndex + 1);
        }

        currString.push(str[i]);
        if (currString.length > maxLen) {
            longest = currString.join('');
        }
        maxLen = Math.max(maxLen, currString.length);

    }
    return { word: longest, max: maxLen };
}

let str = nonRepsubString('abbbcabcdefef');
console.log(str);