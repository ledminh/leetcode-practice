function MinHeap() {
  this.arr = [];
}

MinHeap.prototype.push = function (val) {
  this.arr.push(val);

  let curI = this.arr.length - 1,
    parentI = Math.floor((curI - 1) / 2);

  while (curI > 0 && this.arr[parentI][1] > this.arr[curI][1]) {
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

MinHeap.prototype.heapify = function (curI) {
  const maxI = this.arr.length - 1;

  let iSmallest = curI;

  if (
    2 * curI + 1 <= maxI &&
    this.arr[iSmallest][1] > this.arr[2 * curI + 1][1]
  ) {
    iSmallest = 2 * curI + 1;
  }

  if (
    2 * curI + 2 <= maxI &&
    this.arr[iSmallest][1] > this.arr[2 * curI + 2][1]
  ) {
    iSmallest = 2 * curI + 2;
  }

  if (curI !== iSmallest) {
    const temp = this.arr[curI];
    this.arr[curI] = this.arr[iSmallest];
    this.arr[iSmallest] = temp;

    this.heapify(iSmallest);
  }
};

MinHeap.prototype.isEmpty = function () {
  return this.arr.length === 0;
};

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adjList = {};

  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < times.length; i++) {
    const [n1, n2, duration] = times[i];

    adjList[n1].push([n2, duration]);
  }

  const minHeap = new MinHeap();

  minHeap.push([k, 0]); // [destNode, timeArrive]

  const visited = {};

  let numVisiteds = 0;

  let curTime = 0;

  let count = 1;

  while (!minHeap.isEmpty() && numVisiteds <= n) {
    const [curNode, timeArrive] = minHeap.pop();

    if (!visited[curNode]) {
      visited[curNode] = true;
      numVisiteds++;

      const curNeighbors = adjList[curNode];

      for (let i = 0; i < curNeighbors.length; i++) {
        const [node, duration] = curNeighbors[i];

        const timeArriveNext = timeArrive + duration;

        minHeap.push([node, timeArriveNext]);
      }

      curTime = timeArrive;
    }

    if (count === 3) {
      const minHeapArr = minHeap.arr.slice();
      console.log(`------ Iteration ${count} --------`);
      console.log("curNode = ", curNode);
      console.log("heap = ", minHeapArr);
      console.log("curTime = ", curTime);
      console.log();
    }

    count++;
  }

  return numVisiteds === n ? curTime : -1;
};

console.log("-------------------");

console.log(
  networkDelayTime(
    [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 4]
    ],
    3,
    1
  )
);

//expect: 3
