/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let minSoFar = nums[0],
    maxSoFar = nums[0],
    result = maxSoFar;

  for (let i = 1; i < nums.length; i++) {
    const newMax = Math.max(
      maxSoFar * nums[i],
      Math.max(minSoFar * nums[i], nums[i])
    );
    minSoFar = Math.min(
      maxSoFar * nums[i],
      Math.min(minSoFar * nums[i], nums[i])
    );

    maxSoFar = newMax;

    if (maxSoFar > result) {
      result = maxSoFar;
    }
  }

  return result;
};
