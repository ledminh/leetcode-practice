/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
    else return true;
  }

  return false;
};
