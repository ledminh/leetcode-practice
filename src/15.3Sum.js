/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const results = [];
  const sortedNums = nums.sort((a, b) => a - b);

  let i = 0;

  while (sortedNums.length > i + 2) {
    const currVal = sortedNums[i];

    let start = i + 1,
      end = sortedNums.length - 1;

    while (start < end) {
      let sum2 = sortedNums[start] + sortedNums[end];

      if (sum2 > -currVal) {
        end--;
      } else if (sum2 < -currVal) {
        start++;
      } else {
        results.push([currVal, sortedNums[start], sortedNums[end]]);

        let currStart = sortedNums[start];
        const oldStart = sortedNums[start];

        while (currStart === oldStart) {
          start++;
          currStart = sortedNums[start];
        }
      }
    }

    let nextVal = sortedNums[i];

    while (nextVal === currVal) {
      i++;
      nextVal = sortedNums[i];
    }
  }

  return results;
};
