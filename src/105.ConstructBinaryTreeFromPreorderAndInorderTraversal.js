/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  const node = new TreeNode(preorder[0]);

  const index = inorder.indexOf(preorder[0]);

  const left = buildTree(preorder.slice(1, 1 + index), inorder.slice(0, index));
  const right = buildTree(preorder.slice(1 + index), inorder.slice(index + 1));

  node.left = left;
  node.right = right;

  return node;
};
