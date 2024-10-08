// leetcode104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

import { buildTree } from "../data-structures/binary-tree-ds.js";

const maxDepth = (root) => {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let root = buildTree([3, 9, 20, null, null, 15, 7]);

let maxD = maxDepth(root);
console.log(maxD);
