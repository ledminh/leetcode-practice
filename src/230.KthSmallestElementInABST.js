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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  const _traverse = (node, arr, k) => {
    if (node.left) {
      _traverse(node.left, arr, k);
    }

    if (arr.length < k) {
      arr.push(node.val);
    }

    if (node.right) {
      _traverse(node.right, arr, k);
    }
  };

  const arr = [];

  _traverse(root, arr, k);

  return arr[arr.length - 1];
};
