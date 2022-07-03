/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const _combine = (i, subArr, total) => {
    if (total > target || i >= candidates.length) return;
    else if (total === target) {
      result.push(subArr);
      return;
    }

    const sub1 = [...subArr, candidates[i]];
    _combine(i, sub1, total + candidates[i]);

    const sub2 = [...subArr];
    _combine(i + 1, sub2, total);
  };

  _combine(0, [], 0);

  return result;
};
