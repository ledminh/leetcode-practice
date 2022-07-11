function MinHeap() {
  this.arr = [];
}

MinHeap.prototype.add = function (val) {
  this.arr.push(val);

  let curI = this.arr.length - 1,
    parentI = Math.floor((curI - 1) / 2);

  while (parentI >= 0 && this.arr[curI][1] < this.arr[parentI][1]) {
    const temp = this.arr[curI];
    this.arr[curI] = this.arr[parentI];
    this.arr[parentI] = temp;

    curI = parentI;
    parentI = Math.floor((curI - 1) / 2);
  }
};

MinHeap.prototype.pop = function () {
  const retVal = this.arr[0];
  this.arr[0] = this.arr[this.arr.length - 1];

  this.arr.pop();

  this.heapify(0);

  return retVal;
};

MinHeap.prototype.heapify = function (i) {
  let smallestI = i,
    maxI = this.arr.length - 1;

  if (2 * i + 1 <= maxI && this.arr[smallestI][1] > this.arr[2 * i + 1][1]) {
    smallestI = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[smallestI][1] > this.arr[2 * i + 2][1]) {
    smallestI = 2 * i + 2;
  }

  if (i !== smallestI) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[smallestI];
    this.arr[smallestI] = temp;

    this.heapify(smallestI);
  }
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const distance = (p1, p2) =>
    Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

  let res = 0;

  const visited = {};

  const minHeap = new MinHeap();
  minHeap.add([0, 0]);

  let numVisiteds = 1;

  while (numVisiteds <= points.length) {
    const [i, cost] = minHeap.pop();

    if (!visited[i]) {
      res += cost;

      visited[i] = true;
      numVisiteds++;

      for (let j = 0; j < points.length; j++) {
        if (!visited[j]) {
          minHeap.add([j, distance(points[i], points[j])]);
        }
      }
    }
  }

  return res;
};
