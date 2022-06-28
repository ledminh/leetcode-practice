/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;

  let curr = null,
    head = null;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      if (curr !== null) {
        curr.next = list1;
      } else {
        head = list1;
      }

      curr = list1;
      list1 = list1.next;
    } else {
      if (curr !== null) {
        curr.next = list2;
      } else {
        head = list2;
      }

      curr = list2;
      list2 = list2.next;
    }
  }

  curr.next = list1 === null ? list2 : list1;

  return head;
};
