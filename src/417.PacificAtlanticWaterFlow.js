/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const result = [];

  const _pacific = (row, col) => {
    const queue = [[row, col]];
    const checked = {};

    while (queue.length !== 0) {
      const [r, c] = queue.pop();

      if (c === 0 || r === 0) {
        return true;
      }

      checked[r + "-" + c] = true;

      if (
        r + 1 <= heights.length - 1 &&
        !checked[r + 1 + "-" + c] &&
        heights[r + 1][c] <= heights[r][c]
      ) {
        queue.push([r + 1, c]);
      }

      if (!checked[r - 1 + "-" + c] && heights[r - 1][c] <= heights[r][c]) {
        queue.push([r - 1, c]);
      }

      if (
        c + 1 <= heights[0].length - 1 &&
        !checked[r + "-" + (c + 1)] &&
        heights[r][c + 1] <= heights[r][c]
      ) {
        queue.push([r, c + 1]);
      }

      if (!checked[r + "-" + (c - 1)] && heights[r][c - 1] <= heights[r][c]) {
        queue.push([r, c - 1]);
      }
    }

    return false;
  };

  const _atlantic = (row, col) => {
    const queue = [[row, col]];

    const checked = {};

    while (queue.length !== 0) {
      const [r, c] = queue.pop();

      if (c === heights[0].length - 1 || r === heights.length - 1) {
        return true;
      }

      checked[r + "-" + c] = true;

      if (!checked[r + 1 + "-" + c] && heights[r + 1][c] <= heights[r][c]) {
        queue.push([r + 1, c]);
      }

      if (
        r - 1 >= 0 &&
        !checked[r - 1 + "-" + c] &&
        heights[r - 1][c] <= heights[r][c]
      ) {
        queue.push([r - 1, c]);
      }

      if (!checked[r + "-" + (c + 1)] && heights[r][c + 1] <= heights[r][c]) {
        queue.push([r, c + 1]);
      }

      if (
        c - 1 >= 0 &&
        !checked[r + "-" + (c - 1)] &&
        heights[r][c - 1] <= heights[r][c]
      ) {
        queue.push([r, c - 1]);
      }
    }

    return false;
  };

  for (let r = 0; r < heights.length; r++) {
    for (let c = 0; c < heights[0].length; c++) {
      if (r === 1 && c === 3) {
        console.log(_atlantic(r, c));
      }
      if (_pacific(r, c) && _atlantic(r, c)) {
        result.push([r, c]);
      }
    }
  }

  return result;
};

console.log("--------------------------");

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
  ])
);

//[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
