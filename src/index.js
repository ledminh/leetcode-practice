/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates.sort();

  const _combine = (i, subS, total) => {
    if (i === candidates.length) {
      if (total === target) {
        result.push(subS);
      }

      return;
    } else if (total === target) {
      result.push(subS);
      return;
    }

    _combine(i + 1, [...subS, candidates[i]], total + candidates[i]);

    while (candidates[i] === candidates[i + 1]) {
      i++;
    }
    _combine(i + 1, [...subS], total);
  };

  _combine(0, [], 0);

  return result;
};

console.log(
  combinationSum2(
    [
      14,
      6,
      25,
      9,
      30,
      20,
      33,
      34,
      28,
      30,
      16,
      12,
      31,
      9,
      9,
      12,
      34,
      16,
      25,
      32,
      8,
      7,
      30,
      12,
      33,
      20,
      21,
      29,
      24,
      17,
      27,
      34,
      11,
      17,
      30,
      6,
      32,
      21,
      27,
      17,
      16,
      8,
      24,
      12,
      12,
      28,
      11,
      33,
      10,
      32,
      22,
      13,
      34,
      18,
      12
    ],
    27
  )
);
