const MIN_HEAP = "MIN_HEAP",
  MAX_HEAP = "MAX_HEAP";

function Heap(type) {
  this.arr = [];
  this.type = type;
}

Heap.prototype.size = function () {
  return this.arr.length;
};

Heap.prototype.peek = function () {
  return this.arr[0];
};

Heap.prototype.add = function (val) {
  this.arr.push(val);

  let i = this.arr.length - 1,
    parentI = Math.floor((i - 1) / 2);

  if (this.type === MAX_HEAP) {
    while (parentI >= 0 && this.arr[parentI] < this.arr[i]) {
      const temp = this.arr[parentI];
      this.arr[parentI] = this.arr[i];
      this.arr[i] = temp;

      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  } else if (this.type === MIN_HEAP) {
    while (parentI >= 0 && this.arr[parentI] > this.arr[i]) {
      const temp = this.arr[parentI];
      this.arr[parentI] = this.arr[i];
      this.arr[i] = temp;

      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  }
};

Heap.prototype.pop = function () {
  const retVal = this.arr[0];
  this.arr[0] = this.arr[this.arr.length - 1];
  this.arr.pop();

  this.heapify(0);

  return retVal;
};

Heap.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;
  let swapI = i;

  if (this.type === MAX_HEAP) {
    if (2 * i + 1 <= maxI && this.arr[2 * i + 1] > this.arr[swapI]) {
      swapI = 2 * i + 1;
    }

    if (2 * i + 2 <= maxI && this.arr[2 * i + 2] > this.arr[swapI]) {
      swapI = 2 * i + 2;
    }
  } else if (this.type === MIN_HEAP) {
    if (2 * i + 1 <= maxI && this.arr[2 * i + 1] < this.arr[swapI]) {
      swapI = 2 * i + 1;
    }

    if (2 * i + 2 <= maxI && this.arr[2 * i + 2] < this.arr[swapI]) {
      swapI = 2 * i + 2;
    }
  }

  if (swapI !== i) {
    const temp = this.arr[swapI];
    this.arr[swapI] = this.arr[i];
    this.arr[i] = temp;

    this.heapify(swapI);
  }
};

var MedianFinder = function () {
  this.smallHeap = new Heap(MAX_HEAP);
  this.largeHeap = new Heap(MIN_HEAP);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.smallHeap.add(num);

  if (this.largeHeap.size() > 0) {
    while (this.smallHeap.peek() > this.largeHeap.peek()) {
      const num = this.smallHeap.pop();
      this.largeHeap.add(num);
    }
  }

  const sH =
    this.smallHeap.size() > this.largeHeap.size()
      ? this.largeHeap
      : this.smallHeap;
  const lH =
    this.smallHeap.size() > this.largeHeap.size()
      ? this.smallHeap
      : this.largeHeap;

  while (lH.size() - sH.size() > 1) {
    sH.add(lH.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.smallHeap.size() === this.largeHeap.size()) {
    return (this.smallHeap.peek() + this.largeHeap.peek()) / 2;
  } else {
    return (this.smallHeap.size() > this.largeHeap.size()
      ? this.smallHeap
      : this.largeHeap
    ).peek();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
