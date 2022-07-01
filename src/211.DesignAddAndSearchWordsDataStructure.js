function Node(val) {
  this.value = val? val: null;
  this.children = {};
}


var WordDictionary = function() {
  this.root = new Node();
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let currN = this.root,
      i = 0;
  
  while(currN.children[word[i]]) {
     currN = currN.children[word[i]];
     i++;
  }
  
  while(i < word.length) {
      const prevN = currN;
      currN = new Node(word[i]);
      prevN.children[word[i]] = currN;
      i++;
  }
  
  currN.children.end = true;
};

WordDictionary.prototype._search = function(word, startNode) {
  if(word.length === 0) {
      if(startNode.children.end)
        return true;
      else
        return false;
  }
  else if(word[0] === '.') {
      const nodes = Object.keys(startNode.children)
                          .filter(k => k !== 'end')
                          .map(key => startNode.children[key]);
      
      for(let i = 0; i < nodes.length; i++) {
          if(this._search(word.slice(1), nodes[i])){
              return true;
          };
      }
      
      return false;
      
  }
  else if(startNode.children[word[0]]){
      return this._search(word.slice(1), startNode.children[word[0]]);
  }
  else {
      return false;
  }
  
}


/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  return this._search(word, this.root);
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/