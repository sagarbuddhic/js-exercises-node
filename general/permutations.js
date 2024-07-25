var permute = function (nums) {
  let res = [];

  iterate(nums, []);
  return res;
};

let iterate = (arr, temp) => {
  if (arr.length == 0) {
    res.push(temp);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr.filter((num, idx) => idx != i));
    console.log([...temp, arr[i]]);
    iterate(
      arr.filter((num, idx) => idx != i),
      [...temp, arr[i]]
    );
  }
};

console.log(permute([1, 2, 3, 4]));
