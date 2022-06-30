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
var isValidBST = function (root) {
  if (!root) return true;

  const _isInRange = (node, start, end) => {
    if (!node) return true;

    if (node.val <= start || node.val >= end) return false;

    return (
      _isInRange(node.left, start, node.val) &&
      _isInRange(node.right, node.val, end)
    );
  };

  return _isInRange(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
