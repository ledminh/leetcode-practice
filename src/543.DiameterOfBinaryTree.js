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
var diameterOfBinaryTree = function (root) {
  const _getMaxDiameter = (node) => {
    if (!node) {
      return [-1, -1];
    }

    const [maxDLeft, heightLeft] = _getMaxDiameter(node.left);
    const [maxDRight, heightRight] = _getMaxDiameter(node.right);

    const currD = heightLeft + heightRight + 2;

    return [
      Math.max(maxDLeft, maxDRight, currD),
      Math.max(heightLeft, heightRight) + 1
    ];
  };

  const [maxD, height] = _getMaxDiameter(root);

  return maxD;
};
