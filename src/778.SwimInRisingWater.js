function MinHeap() {
  this.arr = [];
}

MinHeap.prototype.push = function (val) {
  this.arr.push(val);

  let curI = this.arr.length - 1,
    parentI = Math.floor((curI - 1) / 2);

  while (curI > 0 && this.arr[curI][2] < this.arr[parentI][2]) {
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
  const maxI = this.arr.length - 1;

  let iSmallest = i;

  if (2 * i + 1 <= maxI && this.arr[2 * i + 1][2] < this.arr[iSmallest][2]) {
    iSmallest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[2 * i + 2][2] < this.arr[iSmallest][2]) {
    iSmallest = 2 * i + 2;
  }

  if (iSmallest !== i) {
    const temp = this.arr[iSmallest];
    this.arr[iSmallest] = this.arr[i];
    this.arr[i] = temp;

    this.heapify(iSmallest);
  }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const minHeap = new MinHeap();
  minHeap.push([0, 0, grid[0][0]]); // [row, col, maxVal]

  let retVal = null;
  const visited = {};

  while (retVal === null) {
    const [curR, curC, curMax] = minHeap.pop();

    visited[curR + "-" + curC] = true;

    if (curR === grid.length - 1 && curC === grid[0].length - 1) {
      retVal = curMax;
    } else {
      if (curR - 1 >= 0 && !visited[curR - 1 + "-" + curC]) {
        minHeap.push([curR - 1, curC, Math.max(grid[curR - 1][curC], curMax)]);
      }

      if (curR + 1 <= grid.length - 1 && !visited[curR + 1 + "-" + curC]) {
        minHeap.push([curR + 1, curC, Math.max(grid[curR + 1][curC], curMax)]);
      }

      if (curC - 1 >= 0 && !visited[curR + "-" + (curC - 1)]) {
        minHeap.push([curR, curC - 1, Math.max(grid[curR][curC - 1], curMax)]);
      }

      if (curC + 1 <= grid[0].length - 1 && !visited[curR + "-" + (curC + 1)]) {
        minHeap.push([curR, curC + 1, Math.max(grid[curR][curC + 1], curMax)]);
      }
    }
  }

  return retVal;
};
