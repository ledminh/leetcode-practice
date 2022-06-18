/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  const seen = [];
  let currNode = head;

  while (seen.indexOf(currNode) === -1 && currNode.next !== null) {
    seen.push(currNode);

    currNode = currNode.next;
  }

  return currNode.next !== null;
};
