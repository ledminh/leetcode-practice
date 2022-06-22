/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const cache = {};
  const lArr = nums.length + 1;

  const arr = Array(lArr);

  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]]++;
    }
  }

  const nArr = Object.keys(cache);

  for (let i = 0; i < nArr.length; i++) {
    if (arr[cache[nArr[i]]]) arr[cache[nArr[i]]].push(nArr[i]);
    else arr[cache[nArr[i]]] = [nArr[i]];
  }

  console.log(arr);

  const result = [];

  let i = arr.length - 1;
  while (result.length < k && i >= 0) {
    if (arr[i]) {
      for (let j = 0; j < arr[i].length && result.length < k; j++) {
        result.push(arr[i][j]);
      }
    }
    i--;
  }

  return result;
};

console.log("=================");
console.log(topKFrequent([4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7], 3));
