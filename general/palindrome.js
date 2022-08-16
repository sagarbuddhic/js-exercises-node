function isPalindrome(input) {
    let arr = input.split('');
    return arr.reverse().join('') == input;
}

console.log(isPalindrome('kayak'));