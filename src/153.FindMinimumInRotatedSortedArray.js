/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let start = 0,
    end = nums.length - 1,
    min = Number.POSITIVE_INFINITY;

  while (start <= end) {
    if (nums[start] < nums[end]) {
      if (min > nums[start]) {
        min = nums[start];
      }

      break;
    }

    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < min) min = nums[mid];

    if (nums[mid] < nums[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return min;
};
