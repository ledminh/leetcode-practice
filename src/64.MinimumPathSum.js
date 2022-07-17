/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const numRow = grid.length,
    numCol = grid[0].length;

  let result = new Array(numRow).fill(0).map((_) => new Array(numCol).fill(0));

  result[numRow - 1][numCol - 1] = grid[numRow - 1][numCol - 1];

  for (let r = numRow - 1; r >= 0; r--) {
    if (r === numRow - 1) {
      for (let c = numCol - 2; c >= 0; c--) {
        result[r][c] = result[r][c + 1] + grid[r][c];
      }
    } else {
      result[r][numCol - 1] = result[r + 1][numCol - 1] + grid[r][numCol - 1];
    }
  }

  for (let r = grid.length - 2; r >= 0; r--) {
    for (let c = grid[0].length - 2; c >= 0; c--) {
      let smallest = result[r + 1][c];
      if (result[r][c + 1] < smallest) {
        smallest = result[r][c + 1];
      }

      result[r][c] = grid[r][c] + smallest;
    }
  }

  return result[0][0];
};
