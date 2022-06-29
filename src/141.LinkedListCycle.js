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

  const seen = new WeakMap();
  let currN = head;

  while (currN !== null) {
    if (!seen.has(currN)) seen.set(currN, true);
    else return true;

    currN = currN.next;
  }

  return false;
};

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function (head) {
//   if (!head) return false;
//   const seen = [];
//   let currNode = head;

//   while (seen.indexOf(currNode) === -1 && currNode.next !== null) {
//     seen.push(currNode);

//     currNode = currNode.next;
//   }

//   return currNode.next !== null;
// };
