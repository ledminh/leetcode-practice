/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let iSO = i,
      iEO = i;

    while (iSO >= 0 && iEO < s.length && s[iSO] === s[iEO]) {
      total++;

      iSO--;
      iEO++;
    }

    let iSE = i,
      iEE = i + 1;

    while (iSE >= 0 && iEE < s.length && s[iSE] === s[iEE]) {
      total++;

      iSE--;
      iEE++;
    }
  }

  return total;
};
