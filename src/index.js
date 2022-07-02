function Heap(arr, k) {
  this.arr = arr.slice();
  this.k = k;

  for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
    this.heapify(i);
  }

  while (this.arr.length > k) {
    this.pop();
  }
}

Heap.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;

  let iLargest = i;

  if (2 * i + 1 <= maxI && this.arr[2 * i + 1][2] > this.arr[iLargest][2]) {
    iLargest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[2 * i + 2][2] > this.arr[iLargest][2]) {
    iLargest = 2 * i + 2;
  }

  if (i !== iLargest) {
    let temp = this.arr[iLargest];
    this.arr[iLargest] = this.arr[i];
    this.arr[i] = temp;

    this.heapify(iLargest);
  }
};

Heap.prototype.pop = function () {
  this.arr[0] = this.arr[this.arr.length - 1];

  this.arr.pop();

  this.heapify(0);
};

Heap.prototype.toArray = function () {
  return this.arr;
};

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const heap = new Heap(
    points.map((p) => [...p, p[0] * p[0] + p[1] * p[1]]),
    k
  );

  return heap.toArray().map((p) => [p[0], p[1]]);
};

console.log("----------");
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4]
    ],
    2
  )
);
