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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) return null;
  else if (head.next === null) return head;

  let fastP = head,
    slowP = head;

  while (fastP !== null && fastP.next !== null) {
    slowP = slowP.next;
    fastP = fastP.next.next;
  }

  // let midP = null;
  // if(fastP === null) midP = slowP;
  // else midP = slowP.next;

  let midP = slowP;

  let prev = midP,
    curr = midP.next;

  while (curr !== null) {
    const next = curr.next;

    curr.next = prev;

    prev = curr;

    curr = next;
  }

  let rightP = prev,
    leftP = head;

  while (rightP !== midP && leftP !== midP) {
    const newL = leftP.next;
    const newR = rightP.next;

    leftP.next = rightP;

    rightP.next = newL;

    leftP = newL;
    rightP = newR;
  }

  midP.next = null;
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

const list = createList([1, 2, 3, 5, 6, 7]);

reorderList(list);

readList(list);
