let MAX = 1000;
let BITree = new Array(MAX);

function getSum(index) {
  let sum = 0;
  index = index + 1;

  while (index > 0) {
    sum = sum + BITree[index];
    index -= index & -index;
  }
  return sum;
}

function updateBIT(n, index, val) {
  index = index + 1;

  while (index <= n) {
    BITree[index] += val;

    index += index & -index;
  }
}

function constructBITree(arr, n) {
  for (let i = 1; i <= n; i++) BITree[i] = 0;

  for (let i = 0; i < n; i++) updateBIT(n, i, arr[i]);
}

// Main function
let freq = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9];

let n = freq.length;

// Build fenwick tree from given array
constructBITree(freq, n);

console.log("Sum of elements in arr[0..5]" + " is " + getSum(5) + "<br>");

// Let use test the update operation
freq[3] += 6;

// Update BIT for above change in arr[]
updateBIT(n, 3, 6);

// Find sum after the value is updated
console.log("Sum of elements in arr[0..5]" + " after update is " + getSum(5));
