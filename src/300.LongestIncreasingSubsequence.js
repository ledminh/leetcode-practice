/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const result = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        result[i] = Math.max(result[i], result[j] + 1);
      }
    }
  }

  let max = result[0];

  for (let i = 0; i < result.length; i++) {
    if (max < result[i]) max = result[i];
  }

  return max;
};
