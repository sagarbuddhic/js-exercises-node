function bracketsStatus(brackets) {
    if(!brackets) {
        return '';
    }
    
    let temporary = [];
    let openingBrackets = '{[(';
    let closingBrackets = '}])';
    let bracketsArray = brackets.split('');
    
    const everyValue = bracketsArray.every((c) => {
        let temp = temporary[temporary.length - 1]
        if(openingBrackets.includes(c)) {
            temporary.push(c);
            return true;
        } 
        else if(closingBrackets.includes(c) &&
            ((c == '}' && temp == '{')
            || (c == ']' && temp == '[')
            || (c == ')' && temp == '('))) {
                temporary.pop();
                return true;
            } else {
                return false;
            }
        });

        if(everyValue && temporary.length == 0) {
            return 'valid';
        }
        return 'invalid';
    }

    console.log(bracketsStatus('[(){]'));