/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const _permute = (numsLeft, perArr) => {
    if (perArr.length === nums.length) {
      result.push(perArr);
      return;
    }
    for (let i = 0; i < numsLeft.length; i++) {
      const currPerArr = [...perArr, numsLeft[i]];
      const currNumsLeft = [...numsLeft];
      currNumsLeft.splice(i, 1);

      _permute(currNumsLeft, currPerArr);
    }
  };

  _permute(nums, []);
  return result;
};
