// sorts 0s, 1s, 2s.

function sortWithoutBuiltin(arr) {
    let objArr = arr.reduce((obj, curr) => {
        obj[curr] = obj[curr] == undefined ? 1 : obj[curr] + 1;
        return obj;
    }, {});

    // arr.length = 0;

    // for (let [key, value] of Object.entries(objArr).sort()) {
    //     let i = 0;
    //     while(i < value) {
    //         arr.push(parseInt(key));    
    //         i++;
    //     }
    // }

    let output = [];

    for (let [key, value] of Object.entries(objArr).sort()) {
        let temp = new Array(value).fill(parseInt(key));
        output = [...output, ...temp];
    }
    return output;
}

console.log(sortWithoutBuiltin([0, 2, 1, 2, 0]));