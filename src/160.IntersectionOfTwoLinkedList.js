/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currA = headA,
    currB = headB,
    iA = 0,
    iB = 0;

  while (currA !== null || currB !== null) {
    if (currA !== null) {
      iA++;
      currA = currA.next;
    }

    if (currB !== null) {
      iB++;
      currB = currB.next;
    }
  }

  let longList = iA > iB ? headA : headB,
    shortList = longList === headA ? headB : headA;

  const diffLength = Math.abs(iA - iB);

  for (let i = 0; i < diffLength; i++) {
    longList = longList.next;
  }

  while (longList !== shortList) {
    longList = longList.next;
    shortList = shortList.next;
  }

  return longList;
};
