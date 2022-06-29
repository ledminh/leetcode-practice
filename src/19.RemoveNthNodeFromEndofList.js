/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) return null;

  let fastP = head;

  for (let i = 0; i < n; i++) {
    fastP = fastP.next;
  }

  let slowP = head,
    prevP = new ListNode(-1, head);

  while (fastP !== null) {
    prevP = slowP;

    slowP = slowP.next;
    fastP = fastP.next;
  }

  if (slowP === head) return slowP.next;

  prevP.next = slowP.next;

  return head;
};
