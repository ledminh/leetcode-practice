/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arr = [];

  for (let r = 0; r < m; r++) {
    let curRow = null;

    if (r === m - 1) {
      curRow = Array(n).fill(1);
    } else {
      curRow = Array(n);
      curRow[n - 1] = 1;
    }

    arr.push(curRow);
  }

  for (let r = m - 2; r >= 0; r--) {
    for (let c = n - 2; c >= 0; c--) {
      arr[r][c] = arr[r][c + 1] + arr[r + 1][c];
    }
  }

  return arr[0][0];
};
