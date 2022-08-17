function numToWords(input) {
    let single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let double = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let incremental = ['', 'hundred', 'thousand', 'million', 'billion'];
    let inputArr;
    if (input) {
        inputArr = [...input.toString()];
    }
    let multiArr = [];
    let childArr = [];
    while (inputArr.length > 0) {
        childArr = inputArr.splice((inputArr.length > 2 ? (inputArr.length - 3) : 0), 3);
        multiArr.push(childArr.reverse());
    }
    console.log(multiArr);

    // for (let i = inputArr.length - 1; i >= 0; i -= 3) {
    //     let count = 0;
    //     childArr = [];
    //     while (count < 3) {
    //         inputArr[i - count] && childArr.push(inputArr[i - count]);
    //         count++;
    //     }
    //     childArr.length > 0 && multiArr.push(childArr);
    // }

    let concat = multiArr.reduce((prev, curr, index) => {
        let hundred = curr[2] && `${single[curr[2]]} hundred and `;
        let second = curr[1] && (curr[1] == 1 ? `${double[curr[0]]} ` : `${tens[curr[1]]} `);
        let first = curr[1] != 1 ? `${single[curr[0]]}` : '';
        let set = `${hundred || ''}${second || ''}${first || ''}`;
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