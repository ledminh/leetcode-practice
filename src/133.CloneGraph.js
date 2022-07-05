/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return;

  let head = null;
  const oldToNew = new WeakMap();

  const _clone = (curNode) => {
    if (oldToNew.has(curNode)) return oldToNew.get(curNode);

    const newN = new Node(curNode.val);

    oldToNew.set(curNode, newN);

    if (!head) head = newN;

    for (let i = 0; i < curNode.neighbors.length; i++) {
      newN.neighbors.push(_clone(curNode.neighbors[i]));
    }

    return newN;
  };

  _clone(node);

  return head;
};
