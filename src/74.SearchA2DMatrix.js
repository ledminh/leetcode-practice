/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const COLS = matrix[0].length;

  let startR = 0,
    endR = matrix.length - 1,
    midR = -1,
    found = false;

  while (startR <= endR && !found) {
    midR = Math.floor((startR + endR) / 2);

    if (matrix[midR][0] > target) endR = midR - 1;
    else if (matrix[midR][COLS - 1] < target) startR = midR + 1;
    else found = true;
  }

  if (!found) return false;

  let start = 0,
    end = COLS - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (matrix[midR][mid] < target) start = mid + 1;
    else if (matrix[midR][mid] > target) end = mid - 1;
    else return true;
  }

  return false;
};
