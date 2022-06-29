/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const cache = new WeakMap();

  let currN = head,
    newHead = null;

  while (currN !== null) {
    cache.set(currN, new Node(currN.val, null, null));

    if (!newHead) newHead = cache.get(currN);

    currN = currN.next;
  }

  currN = head;

  while (currN !== null) {
    const newNextNode = cache.has(currN.next) ? cache.get(currN.next) : null;
    const newRandomNode = cache.has(currN.random)
      ? cache.get(currN.random)
      : null;

    const newNode = cache.get(currN);

    newNode.next = newNextNode;
    newNode.random = newRandomNode;

    currN = currN.next;
  }

  return newHead;
};
