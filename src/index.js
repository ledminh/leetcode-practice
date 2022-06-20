/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const cache = {};

  for(let i = 0; i < nums.length; i++) {
    if(!cache[target - nums[i]]) cache[nums[i]] = i;
    else {
      return [cache[target - nums[i]], i];
    }
  }
};


console.log("=========");
console.log(twoSum([3,2,4], 6));
