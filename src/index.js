var MinStack = function () {
  this.arr = [];
  this.minIndex = -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);

  if (this.minIndex === -1) this.minIndex = 0;
  else if (this.arr[this.minIndex] > val) {
    this.minIndex = this.arr.length - 1;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop();

  if (this.minIndex === this.arr.length) {
    this.minIndex = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] < this.arr[this.minIndex]) {
        this.minIndex = i;
      }
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[this.minIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
