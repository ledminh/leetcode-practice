/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const _subsets = (i, subS) => {
    if (i >= nums.length) {
      result.push(subS);
      return;
    }

    const sub1 = subS.slice();

    _subsets(i + 1, sub1);

    const sub2 = subS.slice();
    sub2.push(nums[i]);

    _subsets(i + 1, sub2);
  };

  _subsets(0, []);

  return result;
};
