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
var rightSideView = function (root) {
  if (!root) return [];

  let level = [root];
  const result = [];

  while (level.length !== 0) {
    result.push(level[level.length - 1].val);

    const newLevel = [];

    for (let i = 0; i < level.length; i++) {
      if (level[i].left) newLevel.push(level[i].left);

      if (level[i].right) newLevel.push(level[i].right);
    }

    level = newLevel;
  }

  return result;
};
