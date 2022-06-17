// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Constraints:
//     The number of nodes in the list is in the range [0, 300].
//     -100 <= Node.val <= 100
//     The list is guaranteed to be sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if (!head) return null;

  let prev = head,
    curr = head.next;

  if (!curr) return prev;

  while (curr) {
    if (prev.val !== curr.val) {
      prev = prev.next;
      curr = curr.next;
    } else {
      prev.next = curr.next;
      curr = curr.next;
    }
  }

  return head;
};
