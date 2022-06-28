/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let start = 0,
    end = nums.length - 1,
    res = Number.POSITIVE_INFINITY;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log(`start = ${start} --- mid = ${mid} --- end = ${end}`);
    if (nums[mid] < res) {
      res = nums[mid];
    }

    if (nums[start] < nums[end]) {
      if (nums[start] < res) {
        console.log(`nums[start] (${nums[start]}) < res (${res})`);
        res = nums[start];
        break;
      }
    } else if (nums[mid] < nums[start]) {
      console.log(`nums[mid] (${nums[mid]}) < nums[start] (${nums[start]})`);
      end = mid - 1;
    } else {
      console.log(`nums[mid] (${nums[mid]}) > nums[start] (${nums[start]})`);
      start = mid + 1;
    }
  }

  return res;
};

console.log("---------------------");
console.log(findMin([2, 1]));
