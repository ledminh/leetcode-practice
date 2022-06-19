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

const _traverse = (node, arr) => {
  if (node.left) _traverse(node.left, arr);
  if (node.right) _traverse(node.right, arr);

  arr.push(node.val);
};

var postorderTraversal = function (root) {
  const arr = [];

  if (root) {
    _traverse(root, arr);
  }

  return arr;
};
