// Binary Tree Is Symmetric Javascript.
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
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return true;

  return isMirror(root.left, root.right);
};

var isMirror = function (root1, root2) {
  if (!root1 && !root2) {
    return true;
  } else if (!root1 || !root2) {
    return false;
  } else {
    return (
      root1.val === root2.val &&
      isMirror(root1.left, root2.right) &&
      isMirror(root1.right, root2.left)
    );
  }
};
