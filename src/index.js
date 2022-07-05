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
  let log = ``;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1" && !visited[r + "-" + c]) {
        _search(r, c);

        log += `r = ${r} c = ${c} visited = ${Object.keys(visited).filter(
          (k) => visited[k]
        )} \n`;
        numIslands++;
      }
    }
  }

  return numIslands;
};

console.log("-------------------");

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "1", "0"]
  ])
);
