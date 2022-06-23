/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = {},
    cols = {},
    rects = {};

  for (let iR = 0; iR < board.length; iR++) {
    const currRow = board[iR];

    for (let iC = 0; iC < currRow.length; iC++) {
      if (currRow[iC] !== ".") {
        const val = currRow[iC];

        if (!rows[iR]) rows[iR] = [val];
        else if (rows[iR].includes(val)) return false;
        else rows[iR].push(val);

        if (!cols[iC]) cols[iC] = [val];
        else if (cols[iC].includes(val)) return false;
        else cols[iC].push(val);

        const rectName = Math.floor(iR / 3) + "-" + Math.floor(iC / 3);

        if (!rects[rectName]) rects[rectName] = [val];
        else if (rects[rectName].includes(val)) return false;
        else rects[rectName].push(val);
      }
    }
  }
  return true;
};
