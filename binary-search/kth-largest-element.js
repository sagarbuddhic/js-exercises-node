// Function to find the Kth largest element in the array using binary search
function findKthLargest(arr, k) {
  let low = Number.POSITIVE_INFINITY;
  let high = Number.NEGATIVE_INFINITY;

  // Find the minimum and maximum elements in the array
  for (let i = 0; i < arr.length; i++) {
    low = Math.min(low, arr[i]);
    high = Math.max(high, arr[i]);
  }

  // Perform binary search on the range of elements between low and high
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    let count = 0;

    // Count the number of elements greater than mid in the array
    // if number equals mid then  it will be part of lower half.
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        count++;
      }
    }

    // If there are at least K elements greater than mid, search the right half
    if (count >= k) {
      low = mid + 1;
    }
    // Otherwise, search the left half
    else {
      high = mid;
    }
  }

  // Return the Kth largest element
  return high;
}

console.log(findKthLargest([11, 5, 12, 9, 44, 17, 2], 3));
// for kth smallest element it will (arr.length - k) + 1.
