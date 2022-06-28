var TimeMap = function () {
  this.hashTable = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.hashTable[key]) {
    this.hashTable[key] = [{ value: value, timestamp: timestamp }];
  } else {
    this.hashTable[key].push({ value: value, timestamp: timestamp });
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.hashTable[key]) return "";

  const arr = this.hashTable[key];

  let start = 0,
    end = arr.length - 1,
    res = "";

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid].timestamp === timestamp) return arr[mid].value;

    if (arr[mid].timestamp <= timestamp) {
      res = arr[mid].value;
      start = mid + 1;
    } else if (arr[mid].timestamp > timestamp) {
      end = mid - 1;
    }
  }

  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
