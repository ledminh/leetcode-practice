function Heap(arr) {
  this.arr = arr.slice();

  for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
    this.heapify(i);
  }
}

Heap.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;

  let iLargest = i;

  if (2 * i + 1 <= maxI && this.arr[iLargest] < this.arr[2 * i + 1]) {
    iLargest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[iLargest] < this.arr[2 * i + 2]) {
    iLargest = 2 * i + 2;
  }

  if (iLargest !== i) {
    const temp = this.arr[iLargest];
    this.arr[iLargest] = this.arr[i];
    this.arr[i] = temp;

    this.heapify(iLargest);
  }
};

Heap.prototype.size = function () {
  return this.arr.length;
};

Heap.prototype.modifyTop = function (val) {
  this.arr[0] = val;

  this.heapify(0);
};

Heap.prototype.pop = function () {
  const returnResult = this.arr[0];
  this.arr[0] = this.arr[this.arr.length - 1];
  this.arr.pop();

  this.heapify(0);

  return returnResult;
};

Heap.prototype.peek = function () {
  return this.arr[0];
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new Heap(stones);

  while (heap.size() > 1) {
    const largeS = heap.pop();
    const smallS = heap.peek();

    if (largeS - smallS === 0) {
      heap.pop();
    } else {
      heap.modifyTop(largeS - smallS);
    }
  }

  if (heap.size() === 1) return heap.peek();
  else return 0;
};
