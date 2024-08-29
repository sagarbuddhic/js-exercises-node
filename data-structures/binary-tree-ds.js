class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(nums) {
  if (nums.length === 0) {
    return null;
  }
  let root = new TreeNode(nums[0]);
  let q = [root];
  let i = 1;
  while (i < nums.length) {
    let curr = q.shift();
    if (i < nums.length) {
      curr.left = new TreeNode(nums[i++]);
      q.push(curr.left);
    }
    if (i < nums.length) {
      curr.right = new TreeNode(nums[i++]);
      q.push(curr.right);
    }
  }
  return root;
}

function printTree(root) {
  if (!root) {
    return;
  }
  printTree(root.left);
  console.log(root.val + " ");
  printTree(root.right);
}

// let nums = [1, 2, 3, 4, 5, 6, 6, 6, 6];
// let root = buildTree(nums);
// printTree(root);

export { buildTree };
