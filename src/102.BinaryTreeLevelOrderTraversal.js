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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const nodes = [];
  let nodesLevel = [root];

  while (nodesLevel.length !== 0) {
    const values = [];
    const newNodesLevel = [];

    for (let i = 0; i < nodesLevel.length; i++) {
      values.push(nodesLevel[i].val);
      if (nodesLevel[i].left) newNodesLevel.push(nodesLevel[i].left);

      if (nodesLevel[i].right) newNodesLevel.push(nodesLevel[i].right);
    }

    nodes.push(values);

    nodesLevel = newNodesLevel;
  }

  return nodes;
};
