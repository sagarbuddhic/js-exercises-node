// leetcode100

import { buildTree } from "../data-structures/binary-tree-ds.js";

const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

console.log(isSameTree(buildTree([1, 2, 3], [1, 2, 3])));
