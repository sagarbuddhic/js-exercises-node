var combinationSum = function(candidates, target) {
    function backTracking(reminder, combination, start) {
        if(reminder == 0) {
            results.push([...combination]);
            return;
        }
        if(reminder < 0) {
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            console.log(combination);
            backTracking(reminder - candidates[i], combination, i);
            combination.pop();
        }
    };
    let results = [];
    backTracking(target, [], 0);
    return results;
};


// var combinationSum = function(candidates, target) {
//     const res = [];

//     function makeCombination(idx, comb, total) {
//         if (total === target) {
//             res.push([...comb]);
//             return;
//         }

//         if (total > target || idx >= candidates.length) {
//             return;
//         }

//         comb.push(candidates[idx]);
//         makeCombination(idx, comb, total + candidates[idx]);
//         comb.pop();
//         makeCombination(idx + 1, comb, total);
//     }

//     makeCombination(0, [], 0);
//     return res;  
// };

console.log(combinationSum([2, 3, 6, 7], 7));

