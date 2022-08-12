function reverseWords(sentence) {
    if(!sentence) {
        return;
    }
    let words = sentence.split(' ');
    let reversed = words.map((word) => word.split('').reverse().join(''));
    return reversed.join(' ');
}

console.log(reverseWords('abra cada ttta'));