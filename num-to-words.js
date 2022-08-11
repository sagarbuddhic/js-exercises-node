function numToWords(input) {
    let single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let double = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let incremental = ['', 'hundred', 'thousand', 'million', 'billion'];
    let inputArr;
    if (input) {
        inputArr = [...input.toString()];
    }
    let multiArr = [];
    let childArr = [];
    for (let i = inputArr.length - 1; i >= 0; i -= 3) {
        let count = 0;
        childArr = [];
        while (count < 3) {
            inputArr[i - count] && childArr.push(inputArr[i - count]);
            count++;
        }
        childArr.length > 0 && multiArr.push(childArr);
    }

    let concat = multiArr.reduce((prev, curr, index) => {
        let hundred = curr[2] && `${single[curr[2]]} hundred and `;
        let second = curr[1] && `${tens[curr[1]]} `;
        let set = `${hundred || ''}${second || ''}${single[curr[0]]}`;
        switch (index) {
            case 0:
                break;
            case 1:
                set = `${set} thousand`;
                break;
            case 2:
                set = `${set} million`;
                break;
            case 3:
                set = `${set} billion`;
                break;
        }
        prev = `${set} ${prev}`;
        return prev;
    }, '');
    return concat;
}

console.log(numToWords('12204'));