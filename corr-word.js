function myFunction (str) {
    if(!str) {
        return;
     }

    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('').replace('{', 'a');
     
    //  let aToZ = 'abcdefghijklmnopqrstuvwxyz';
    //  let letters = str.split('');
     
    //  let output = letters.map((letter, index) => {
    //     let curr = aToZ.indexOf(letter);
    //     let ind = curr + 1;
    //     ind = ind == aToZ.length ? 0: ind;
    //      return aToZ[ind];
    //  });
    //  return output.join('');

    return correctedArray;
}

console.log(myFunction('zms'));