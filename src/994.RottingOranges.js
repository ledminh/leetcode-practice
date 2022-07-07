/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rottens = [];

  let numFreshs = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) {
        rottens.push([r, c]);
      } else if (grid[r][c] === 1) {
        numFreshs++;
      }
    }
  }

  let time = 0;

  while (rottens.length !== 0) {
    const newRottens = [];

    for (let i = 0; i < rottens.length; i++) {
      const [r, c] = rottens[i];

      if (r + 1 <= grid.length - 1 && grid[r + 1][c] === 1) {
        grid[r + 1][c] = 2;

        newRottens.push([r + 1, c]);
        numFreshs--;
      }

      if (r - 1 >= 0 && grid[r - 1][c] === 1) {
        grid[r - 1][c] = 2;

        newRottens.push([r - 1, c]);
        numFreshs--;
      }

      if (c + 1 <= grid[0].length - 1 && grid[r][c + 1] === 1) {
        grid[r][c + 1] = 2;

        newRottens.push([r, c + 1]);
        numFreshs--;
      }

      if (c - 1 >= 0 && grid[r][c - 1] === 1) {
        grid[r][c - 1] = 2;

        newRottens.push([r, c - 1]);
        numFreshs--;
      }
    }

    if (newRottens.length !== 0) time++;

    rottens = newRottens;
  }

  return numFreshs === 0 ? time : -1;
};
