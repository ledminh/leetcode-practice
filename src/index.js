/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createList = (arr) => {
  const head = new ListNode(arr[0]);
  let i = 1,
    currNode = head;

  while (i < arr.length) {
    const tempN = new ListNode(arr[i]);

    currNode.next = tempN;
    currNode = tempN;

    i++;
  }

  return head;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let currA = headA,
    currB = headB;

  while (currA !== null) {
    while (currB !== null && currA.val !== currB.val) {
      console.log(currB);
      currB = currB.next;
    }

    if (currA.val === currB.val) return currA.val;

    currA = currA.next;
  }

  return null;
};

const test = (arr1, arr2) => {
  console.log("==================");
  const headA = createList(arr1);
  const headB = createList(arr2);

  const node = getIntersectionNode(headA, headB);

  console.log(node);
};

test([8], [4, 1, 8, 4, 5]);
