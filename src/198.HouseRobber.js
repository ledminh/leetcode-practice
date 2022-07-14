/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let prevMax = 0,
    curMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const oldCurMax = curMax;

    curMax = Math.max(curMax, prevMax + nums[i]);

    prevMax = oldCurMax;
  }

  return curMax;
};
