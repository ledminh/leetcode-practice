/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hashTB = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashTB[nums[i]]) hashTB[nums[i]] = 1;
    else hashTB[nums[i]]++;
  }

  const keys = Object.keys(hashTB);

  for (let i = 0; i < keys.length; i++) {
    if (hashTB[keys[i]] === 1) return keys[i];
  }
};
