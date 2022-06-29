/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  const getNextIndex = (i) => nums[i];

  let slowP = -1,
    fastP = -2;

  while (slowP !== fastP) {
    slowP = getNextIndex(slowP === -1 ? 0 : slowP);
    fastP = getNextIndex(getNextIndex(fastP === -2 ? 0 : fastP));
  }

  slowP = 0;

  while (slowP !== fastP) {
    slowP = getNextIndex(slowP);
    fastP = getNextIndex(fastP);
  }

  return slowP;
};
