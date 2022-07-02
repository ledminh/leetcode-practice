function MaxHeap(arr) {
  this.arr = arr.slice();

  for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
    this.heapify(i);
  }
}

MaxHeap.prototype.heapify = function (i) {
  const maxI = this.arr.length - 1;
  let iLargest = i;

  if (2 * i + 1 <= maxI && this.arr[2 * i + 1][1] > this.arr[iLargest][1]) {
    iLargest = 2 * i + 1;
  }

  if (2 * i + 2 <= maxI && this.arr[2 * i + 2][1] > this.arr[iLargest][1]) {
    iLargest = 2 * i + 2;
  }

  if (iLargest !== i) {
    const temp = this.arr[i];
    this.arr[i] = this.arr[iLargest];
    this.arr[iLargest] = temp;

    this.heapify(iLargest);
  }
};

MaxHeap.prototype.size = function () {
  return this.arr.length;
};

MaxHeap.prototype.add = function (val) {
  this.arr.push(val);

  let currI = this.arr.length - 1,
    parentI = Math.floor((currI - 1) / 2);

  while (parentI >= 0 && this.arr[currI][1] > this.arr[parentI][1]) {
    let temp = this.arr[currI];
    this.arr[currI] = this.arr[parentI];
    this.arr[parentI] = temp;

    currI = parentI;
    parentI = Math.floor((currI - 1) / 2);
  }
};

MaxHeap.prototype.pop = function () {
  const retVal = this.arr[0];
  this.arr[0] = this.arr[this.arr.length - 1];
  this.arr.pop();

  this.heapify(0);

  return retVal;
};

/****************
 */
function MyQueue() {
  this.arr = [];
  this.firstIndex = null;
}

MyQueue.prototype.enqueue = function (val) {
  if (this.arr.length === 0) this.firstIndex = 0;

  this.arr.push(val);
};

MyQueue.prototype.dequeue = function () {
  const retVal = this.arr[this.firstIndex];
  this.firstIndex++;

  if (this.firstIndex === 20) {
    this.arr = this.arr.slice(this.firstIndex);
    this.firstIndex = 0;
  }

  return retVal;
};

MyQueue.prototype.size = function () {
  if (this.arr.length === 0) return 0;

  return this.arr.length - this.firstIndex;
};

MyQueue.prototype.peek = function () {
  if (this.arr.length === 0) return null;

  return this.arr[this.firstIndex];
};

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const tasksCount = {};

  for (let i = 0; i < tasks.length; i++) {
    if (tasksCount[tasks[i]]) tasksCount[tasks[i]]++;
    else tasksCount[tasks[i]] = 1;
  }

  const heap = new MaxHeap(
    Object.keys(tasksCount).map((task) => [task, tasksCount[task]])
  );
  const queue = new MyQueue();

  let time = 0;

  while (heap.size() !== 0 || queue.size() !== 0) {
    if (queue.size() > 0 && queue.peek()[2] <= time) {
      const task = queue.dequeue();
      //console.log(`Time ${time}:  dequeue: task ${task[0]} - count ${task[1]} - time: ${task[2]}`);
      heap.add([task[0], task[1]]);
    }

    if (heap.size() > 0) {
      const currTask = heap.pop();
      //console.log(`Time ${time}:  run: task ${currTask[0]} - count ${currTask[1]}`);
      if (currTask[1] > 1) {
        queue.enqueue([currTask[0], currTask[1] - 1, time + n + 1]);
      }
    }

    time++;
  }

  return time;
};
