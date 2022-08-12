function equilibrium(arr) {
    console.log(arr);
    let equi = -1;
    let leftSum, rightSum;
    let intArr = arr.map((value) => parseInt(value));

    for(let i=0; i < intArr.length; i++) {
        leftSum = 0;
        rightSum = 0;
        for(let j = 0; j < i; j++)
            leftSum += intArr[j];

        for(let j=intArr.length- 1; j > i; j--)
            rightSum += intArr[j];

            if(rightSum === leftSum) {
                equi = i;
                break;
            }
    }
    return equi;
}

let equi = equilibrium(process.argv.slice(2));
console.log(equi);