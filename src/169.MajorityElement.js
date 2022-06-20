/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
    else cache[nums[i]]++;
  }

  return Object.keys(cache).filter((num) => cache[num] >= nums.length / 2)[0];
};
