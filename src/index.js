function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

const _reverse = (h) => {
  if (h.next === null) {
    return { head: h, tail: h };
  } else {
    const result = _reverse(h.next);

    result.tail.next = h;

    return { head: result.head, tail: h };
  }
};

var reverseList = function (head) {
  if (head === null) return head;

  const result = _reverse(head);

  result.tail.next = null;

  return result.head;

  //   let prevNode = head, currNode = head.next;

  //   while(currNode !== null) {
  //       if(prevNode === head) prevNode.next = null;

  //       const tempN = currNode.next;

  //       currNode.next = prevNode;
  //       prevNode = currNode;
  //       currNode = tempN;
  //   }

  //   return prevNode;
};

const createList = (arr) => {
  let prevN = null,
    currNode = null,
    head = null;

  for (let i = 0; i < arr.length; i++) {
    currNode = new ListNode(arr[i]);

    if (!head) head = currNode;

    if (prevN) prevN.next = currNode;

    prevN = currNode;
  }

  currNode.next = null;

  return head;
};

const readList = (head) => {
  console.log("-----------------");
  let s = "";
  let i = 0;

  while (head && i < 20) {
    s += head.val + " -- ";
    head = head.next;
    i++;
  }

  console.log(s);
};

const list = createList([1, 2, 3, 4, 5, 6]);

const listR = reverseList(list);

readList(listR);
