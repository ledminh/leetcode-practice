/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let mem = 0,
    prevN = null,
    head = null;

  while (l1 !== null && l2 !== null) {
    let result = l1.val + l2.val + mem;

    if (result >= 10) {
      mem = 1;
      result -= 10;
    } else {
      mem = 0;
    }

    const currN = new ListNode(result);

    if (prevN) prevN.next = currN;

    prevN = currN;

    if (!head) head = currN;

    l1 = l1.next;
    l2 = l2.next;
  }

  let listRemain = l1 === null ? l2 : l1;

  while (listRemain !== null) {
    let result = listRemain.val + mem;

    if (result >= 10) {
      mem = 1;
      result -= 10;
    } else {
      mem = 0;
    }

    const currN = new ListNode(result);

    prevN.next = currN;
    prevN = currN;

    listRemain = listRemain.next;
  }

  if (mem === 1) {
    prevN.next = new ListNode(1);
  }

  return head;
};
