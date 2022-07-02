/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.arr = nums.slice();
  this.k = k;

  for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
    this.heapify(i);
  }

  while (this.arr.length > k) {
    this.pop();
  }
};

KthLargest.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;

  let iSmallest = i;

  if (2 * i + 1 <= maxI && this.arr[2 * i + 1] < this.arr[iSmallest]) {
    iSmallest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[2 * i + 2] < this.arr[iSmallest]) {
    iSmallest = 2 * i + 2;
  }

  if (iSmallest !== i) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[iSmallest];
    this.arr[iSmallest] = temp;

    this.heapify(iSmallest);
  }
};

KthLargest.prototype.pop = function () {
  let temp = this.arr[this.arr.length - 1];
  this.arr[this.arr.length - 1] = this.arr[0];
  this.arr[0] = temp;

  this.arr.pop();

  this.heapify(0);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.arr.length < this.k) {
    this.arr.push(this.arr[0]);
    this.arr[0] = val;

    this.heapify(0);
  } else if (val >= this.arr[0]) {
    this.arr[0] = val;
    this.heapify(0);
  }

  return this.arr[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
