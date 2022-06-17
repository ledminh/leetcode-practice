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

const _isSymetric = function (node1, node2) {
  if (!node1 && !node2) return true;

  if (!node1 || !node2) return false;

  return (
    node1.val === node2.val &&
    _isSymetric(node1.right, node2.left) &&
    _isSymetric(node1.left, node2.right)
  );
};

var isSymmetric = function (root) {
  return _isSymetric(root.left, root.right);
};
