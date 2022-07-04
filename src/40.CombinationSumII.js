/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  const _combine = (pos, subS, total) => {
    if (total === target) {
      result.push(subS);
      return;
    } else if (total > target) {
      return;
    }

    let prev = -1;

    for (let i = pos; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      _combine(i + 1, [...subS, candidates[i]], total + candidates[i]);

      prev = candidates[i];
    }
  };

  _combine(0, [], 0);

  return result;
};
