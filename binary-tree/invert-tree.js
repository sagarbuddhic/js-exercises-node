// leetcode226

import { buildTree } from "../data-structures/binary-tree-ds.js";

var invertTree = function (root) {
  if (root == null) {
    return root;
  }

  invertTree(root.left);

  invertTree(root.right);

  const curr = root.left;
  root.left = root.right;
  root.right = curr;
  return root;
};

let root = buildTree([4, 2, 7, 1, 3, 6, 9]);
console.log(invertTree(root));
