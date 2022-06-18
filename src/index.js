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

const _height = function (node) {
  if (!node) return -1;

  return Math.max(_height(node.left), _height(node.right)) + 1;
};

var isBalanced = function (root) {
  if (root === null) return true;

  return (
    Math.abs(_height(root.left) - _height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
