/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr[i] = i === 0 ? 1 : arr[i - 1] * nums[i - 1];
  }

  let pos = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = arr[i] * pos;
    pos = pos * nums[i];
  }

  return arr;
};
