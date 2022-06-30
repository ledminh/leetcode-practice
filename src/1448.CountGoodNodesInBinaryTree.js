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
var goodNodes = function (root) {
  if (!root) return 0;

  const _goodNodes = (node, max) => {
    if (!node) return 0;

    const currMax = node.val > max ? node.val : max;

    const goodNLeft = _goodNodes(node.left, currMax);
    const goodNRight = _goodNodes(node.right, currMax);

    return goodNLeft + goodNRight + (node.val >= max ? 1 : 0);
  };

  return _goodNodes(root, Number.NEGATIVE_INFINITY);
};
