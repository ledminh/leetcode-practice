/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  let prev = 0,
    cur = 1,
    step = n;

  while (step > 0) {
    const oldCur = cur;
    cur = prev + cur;
    prev = oldCur;
    step--;
  }

  return cur;
};
