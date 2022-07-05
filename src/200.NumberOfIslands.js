/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = {};

  const _search = (row, col) => {
    const queue = [[row, col]];

    while (queue.length > 0) {
      const [r, c] = queue.pop();
      visited[r + "-" + c] = true;

      if (
        r + 1 <= grid.length - 1 &&
        !visited[r + 1 + "-" + c] &&
        grid[r + 1][c] === "1"
      ) {
        queue.push([r + 1, c]);
      }

      if (r - 1 >= 0 && !visited[r - 1 + "-" + c] && grid[r - 1][c] === "1") {
        queue.push([r - 1, c]);
      }

      if (c - 1 >= 0 && !visited[r + "-" + (c - 1)] && grid[r][c - 1] === "1") {
        queue.push([r, c - 1]);
      }

      if (
        c + 1 <= grid[0].length - 1 &&
        !visited[r + "-" + (c + 1)] &&
        grid[r][c + 1] === "1"
      ) {
        queue.push([r, c + 1]);
      }
    }
  };

  let numIslands = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1" && !visited[r + "-" + c]) {
        _search(r, c);

        numIslands++;
      }
    }
  }

  return numIslands;
};
