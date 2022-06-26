/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const _search = (start, end) => {
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) return _search(mid + 1, end);

    if (nums[mid] > target) return _search(start, mid - 1);
  };

  return _search(0, nums.length - 1);
};
