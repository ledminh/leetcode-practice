/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[start]) {
      // mid is in the left sorted portion of the array

      if (nums[mid] < target || target < nums[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      // mid is in the right sorted portion of the array

      if (nums[mid] > target || target > nums[end]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};
