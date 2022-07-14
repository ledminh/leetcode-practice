/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result1 = [0, 0];

  for (let i = 0; i < s.length; i++) {
    let iS = i,
      iE = i;

    while (iS >= 0 && iE < s.length && s[iS] === s[iE]) {
      if (iE - iS > result1[1] - result1[0]) {
        result1 = [iS, iE];
      }
      iS--;
      iE++;
    }
  }

  let result2 = [0, 0];

  for (let i = 0; i < s.length; i++) {
    let iS = i,
      iE = i + 1;

    while (iS >= 0 && iE < s.length && s[iS] === s[iE]) {
      if (iE - iS > result2[1] - result2[0]) {
        result2 = [iS, iE];
      }
      iS--;
      iE++;
    }
  }

  return result1[1] - result1[0] > result2[1] - result2[0]
    ? s.substring(result1[0], result1[1] + 1)
    : s.substring(result2[0], result2[1] + 1);
};
