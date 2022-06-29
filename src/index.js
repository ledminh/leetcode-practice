function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

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
var copyRandomList = function(head) {
    const cache = {};
    
    let currN = head, newHead = null; 
    
    while(currN !== null) {
        
        cache[currN] = new Node(currN.val, null, null);
        
        if(!newHead) 
            newHead = cache[currN];
        
        
        currN = currN.next;
    }
    
    currN = head;
    
    while(currN !== null) {
        const newNextNode = cache[currN.next];
        const newRandomNode  = cache[currN.random];
        
        cache[currN].next = newNextNode;
        cache[currN].random = newRandomNode;
        
        currN = currN.next;
    }
    
    return newHead;
};

const createList = (arr) => {
  let prevN = null,
    currNode = null,
    head = null;

  for (let i = 0; i < arr.length; i++) {
    currNode = new Node(arr[i][0], null, arr[]);

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

const list = createList([[7,null],[13,0],[11,4],[10,2],[1,0]]);

reorderList(list);

readList(list);
