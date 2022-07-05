/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];

  const _solve = (row, cols, posDiags, negDiags, posArr) => {
    if (row === n) {
      const board = [];

      for (let i = 0; i < n; i++) {
        const r = Array(n).fill(".");

        board.push(r);
      }

      for (let i = 0; i < posArr.length; i++) {
        board[posArr[i].row][posArr[i].col] = "Q";
      }

      for (let i = 0; i < board.length; i++) {
        board[i] = board[i].join("");
      }

      res.push(board);

      return;
    }

    for (let c = 0; c < n; c++) {
      if (!cols[c + ""] && !posDiags[c + row + ""] && !negDiags[c - row + ""]) {
        const newPArr = [...posArr];
        newPArr.push({ row: row, col: c });

        const newCols = {
          ...cols,
          [c + ""]: true
        };

        const newPosDiags = {
          ...posDiags,
          [c + row + ""]: true
        };

        const newNegDiags = {
          ...negDiags,
          [c - row + ""]: true
        };

        _solve(row + 1, newCols, newPosDiags, newNegDiags, newPArr);
      }
    }
  };

  _solve(0, {}, {}, {}, []);

  return res;
};
