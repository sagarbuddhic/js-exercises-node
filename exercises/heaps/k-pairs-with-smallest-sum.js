class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  peek() {
    return this.heap[0];
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

const kSmallestPairs = function (nums1, nums2, k) {
  const pairs = [];
  const minHeap = new MinHeap();
  const visited = new Set();
  let currCount = 0;

  const addToHeap = (x, y) => {
    minHeap.push({
      indexes: [x, y],
      sum: nums1[x] + nums2[y],
    });
    visited.add(`${x},${y}`);
  };

  minHeap.push({
    indexes: [0, 0],
    sum: nums1[0] + nums2[0],
  }); // or addToHeap(0,0);
  visited.add(`0,0`);

  while (currCount < k && minHeap.size() > 0) {
    const pair = minHeap.pop();
    currCount += 1;
    const [i, j] = pair.indexes;
    pairs.push([nums1[i], nums2[j]]);

    // add index [i,j+1] and [i+1,j] if not already added

    if (i + 1 < nums1.length && !visited.has(`${i + 1},${j}`)) {
      addToHeap(i + 1, j);
    }

    if (j + 1 < nums2.length && !visited.has(`${i},${j + 1}`)) {
      addToHeap(i, j + 1);
    }
  }

  return pairs;
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
