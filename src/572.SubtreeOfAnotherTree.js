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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const isSameTree = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  else if (!tree1 || !tree2) {
    return false;
  }

  return (
    tree1.val === tree2.val &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
};

var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true;
  else if (!root || !subRoot) return false;

  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
