function MinHeap(arr, k) {
  this.arr = arr.slice();
  this.k = k;

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    this.heapify(i);
  }

  while (this.arr.length > k) {
    this.pop();
  }
}

MinHeap.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;
  let iSmallest = i;

  if (2 * i + 1 <= maxI && this.arr[2 * i + 1] < this.arr[iSmallest]) {
    iSmallest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[2 * i + 2] < this.arr[iSmallest]) {
    iSmallest = 2 * i + 2;
  }

  if (iSmallest !== i) {
    const temp = this.arr[iSmallest];
    this.arr[iSmallest] = this.arr[i];
    this.arr[i] = temp;

    this.heapify(iSmallest);
  }
};

MinHeap.prototype.pop = function () {
  this.arr[0] = this.arr[this.arr.length - 1];
  this.arr.pop();
  this.heapify(0);
};

MinHeap.prototype.peek = function () {
  return this.arr[0];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return new MinHeap(nums, k).peek();
};
