var MinStack = function () {
  this.values = [];
  this.mins = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.values.length === 0 || this.mins[this.mins.length - 1] > val) {
    this.mins.push(val);
  } else {
    this.mins.push(this.mins[this.mins.length - 1]);
  }

  this.values.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.values.pop();
  this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.values[this.values.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
