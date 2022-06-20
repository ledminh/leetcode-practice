/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */

var findMissingRanges = function (nums, lower, upper) {
  if (nums.length === 0) {
    if (lower === upper) return [lower + ""];
    else return [lower + "->" + upper];
  }

  let start = lower,
    end = nums[0] - 1;
  const result = [];

  if (end - start === 0) {
    result.push(end + "");
  } else if (end - start > 0) {
    result.push(start + "->" + end);
  }

  for (let i = 0; i < nums.length - 1; i++) {
    start = nums[i] + 1;
    end = nums[i + 1] - 1;

    if (end - start === 0) {
      result.push(end + "");
    } else if (end - start > 0) {
      result.push(start + "->" + end);
    }
  }

  start = nums[nums.length - 1] + 1;
  end = upper;

  if (end - start === 0) {
    result.push(end + "");
  } else if (end - start > 0) {
    result.push(start + "->" + end);
  }

  return result;
};
