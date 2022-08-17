// Check if closing and opening brackets are in sequence.
// Example - {([])} - correct sequence. 
// {{[} - wrong sequence.
function isCorrectSequence(input) {
    if (!input) {
        return '';
    }

    let tempArr = [];
    let open = '{[(';
    let close = '}])';

    const everyValue = [...input].every((value) => {
        let temp = tempArr[tempArr.length - 1];
        if (open.includes(value)) {
            tempArr.push(value);
            return true;
        }
        else if (close.includes(value) &&
            ((value == '}' && temp == '{')
                || (value == ']' && temp == '[')
                || (value == ')' && temp == '('))) {
            tempArr.pop();
            return true;
        } else {
            return false;
        }
    });

    if (everyValue && tempArr.length == 0) {
        return 'valid';
    }
    return 'invalid';
}

console.log(isCorrectSequence('{([])}'));