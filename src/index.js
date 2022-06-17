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
 * @return {number[]}
 */

const traverse = (node, arr) => {
  if (node.left) traverse(node.left, arr);
  arr.push(node.val);
  if (node.right) traverse(node.right, arr);
};

var inorderTraversal = function (root) {
  if (!root) return [];

  const nums = [];

  traverse(root, nums);

  return nums;
};
