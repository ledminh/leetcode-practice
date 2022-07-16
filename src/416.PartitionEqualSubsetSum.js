/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let total = nums.reduce((sum, n) => sum + n, 0);
  
  if(total%2 !== 0)
      return false;
  
  const subTotal = total/2;
  
  const cache = {};
  
  
  const _traverse = (sTotal, iStart) => {
      
      if(cache[sTotal] !== undefined)
          return cache[sTotal];
      
      if(sTotal === 0) {
          return true;
      }
      
      if(iStart === nums.length){
          return sTotal === 0;
      }
      
      let found = false;
      
      for(let i = iStart; i < nums.length && !found; i++) {
          if(_traverse(sTotal - nums[i], i + 1))
              found = true;
      }
      
      cache[sTotal] = found;
      
      
      return found;
  }
  
  let found = false;
  
  for(let i = 0; i < nums.length && !found; i++) {
      
      if(_traverse(subTotal - nums[i], i + 1))
          found = true;        
      
  }
  
  return found;
  
};