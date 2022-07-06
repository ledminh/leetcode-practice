/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const counted = {};

  const _countArea = (row, col) => {
    let count = 0;

    const queue = [[row, col]];
    console.log("START COUNT");
    let log = ``;
    while (queue.length !== 0) {
      const [r, c] = queue.pop();

      if (!counted[r + "-" + c]) {
        counted[r + "-" + c] = true;
        count++;
      }

      if (
        r + 1 <= grid.length - 1 &&
        !counted[r + 1 + "-" + c] &&
        grid[r + 1][c] === 1
      ) {
        queue.push([r + 1, c]);

        log += `count = ${count} (1) push row-${r + 1} c-${c}\n`;
      }

      if (r - 1 >= 0 && !counted[r - 1 + "-" + c] && grid[r - 1][c] === 1) {
        queue.push([r - 1, c]);

        log += `count = ${count} (2) push row-${r - 1} c-${c}\n`;
      }

      if (
        c + 1 <= grid[0].length - 1 &&
        !counted[r + "-" + [c + 1]] &&
        grid[r][c + 1] === 1
      ) {
        queue.push([r, c + 1]);
        log += `count = ${count} (3) push row-${r} c-${c + 1}\n`;
      }

      if (c - 1 >= 0 && !counted[r + "-" + (c - 1)] && grid[r][c - 1] === 1) {
        queue.push([r, c - 1]);
        log += `count = ${count} (4) push row-${r} c-${c - 1}\n`;
      }
    }

    console.log(log);
    return count;
  };

  let maxA = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (!counted[r + "-" + c] && grid[r][c] === 1) {
        const area = _countArea(r, c);

        if (area > maxA) {
          maxA = area;
        }
      }
    }
  }

  return maxA;
};

console.log("-------------------");

console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
  ])
);
