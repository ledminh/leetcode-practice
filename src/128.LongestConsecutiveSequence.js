/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] = true;
  }

  let maxSqLength = 0;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i],
      leftNum = currNum - 1;

    if (!cache[leftNum]) {
      let rightNum = currNum + 1,
        sqlength = 1;

      while (cache[rightNum]) {
        sqlength++;
        rightNum++;
      }

      if (sqlength > maxSqLength) {
        maxSqLength = sqlength;
      }
    }
  }

  return maxSqLength;
};
