/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];

  nums.sort();

  const _subset = (i, subS) => {
    if (i === nums.length) {
      result.push(subS);
      return;
    }

    _subset(i + 1, [...subS, nums[i]]);

    while (nums[i + 1] === nums[i]) {
      i++;
    }

    _subset(i + 1, [...subS]);
  };

  _subset(0, []);

  return result;
};
