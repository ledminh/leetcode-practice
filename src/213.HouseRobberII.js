/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const _rob = (iStart, iEnd) => {
    let prev = 0,
      cur = nums[iStart];

    for (let i = iStart + 1; i <= iEnd; i++) {
      const oldCur = cur;

      cur = Math.max(cur, nums[i] + prev);

      prev = oldCur;
    }

    return cur;
  };

  return nums.length === 1
    ? nums[0]
    : Math.max(_rob(0, nums.length - 2), _rob(1, nums.length - 1));
};
