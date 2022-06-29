/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.currentTotal = 0;

  const mostRecent = { val: null, next: null };
  const leastRecent = { prev: null, val: null };

  mostRecent.prev = leastRecent;
  leastRecent.next = mostRecent;

  this.mostRecent = mostRecent;
  this.leastRecent = leastRecent;

  this.table = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.table[key]) return -1;
  else {
    const node = this.table[key];

    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    const mostRecent = this.mostRecent.prev;
    node.next = this.mostRecent;
    this.mostRecent.prev = node;

    node.prev = mostRecent;
    mostRecent.next = node;

    return node.value;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.table[key]) {
    const node = this.table[key];
    node.value = value;
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    const mostRecent = this.mostRecent.prev;
    node.next = this.mostRecent;
    this.mostRecent.prev = node;

    node.prev = mostRecent;
    mostRecent.next = node;

    return;
  }

  if (this.currentTotal === this.capacity) {
    const nextRecentNode = this.leastRecent.next.next;

    this.table[this.leastRecent.next.key] = undefined;

    nextRecentNode.prev = this.leastRecent;
    this.leastRecent.next = nextRecentNode;

    this.currentTotal--;
  }

  const node = {
    key: key,
    value: value
  };

  const prevNode = this.mostRecent.prev;

  node.next = this.mostRecent;
  this.mostRecent.prev = node;

  node.prev = prevNode;
  prevNode.next = node;

  this.table[key] = node;

  this.currentTotal++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const test = (commands, params) => {
  const lruCache = new LRUCache(...params[0]);
  let result = "";

  for (let i = 1; i < commands.length; i++) {
    switch (commands[i]) {
      case "put":
        lruCache.put(...params[i]);
        result += "null |";
        break;
      case "get":
        result += lruCache.get(...params[i]) + " | ";
        break;
      default:
        break;
    }
  }

  console.log("----------------------");
  console.log(result);
  console.log(lruCache.table);
};
