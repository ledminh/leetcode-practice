function Node(val) {
  this.val = val ? val : null;
  this.children = {};
}

var Trie = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let i = 0,
    currNode = this.root;

  while (currNode.children[word[i]] !== undefined) {
    currNode = currNode.children[word[i]];
    i++;
  }

  while (i < word.length) {
    const newN = new Node(word[i]);
    currNode.children[word[i]] = newN;
    currNode = newN;
    i++;
  }

  currNode.children.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currNode = this.root;

  for (let i = 0; i < word.length; i++) {
    currNode = currNode.children[word[i]];
    if (currNode === undefined) return false;
  }

  if (currNode.children.end) return true;
  else return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currNode = this.root;

  for (let i = 0; i < prefix.length; i++) {
    currNode = currNode.children[prefix[i]];
    if (currNode === undefined) return false;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
