/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache[target - nums[i]] === undefined) cache[nums[i]] = i;
    else {
      return [cache[target - nums[i]], i];
    }
  }
};
