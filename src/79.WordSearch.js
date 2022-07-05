/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  const maxRow = board.length - 1,
    maxCol = board[0].length - 1,
    maxWordI = word.length - 1;

  const _check = (rowI, colI, wordI) => {
    if (rowI > maxRow || colI > maxCol || rowI < 0 || colI < 0) {
      if (wordI > maxWordI) {
        return true;
      } else {
        return false;
      }
    }

    if (wordI > maxWordI) return true;

    if (seen[rowI + "-" + colI]) {
      return false;
    }

    if (board[rowI][colI] !== word[wordI]) {
      seen[rowI + "-" + colI] = false;

      return false;
    }

    seen[rowI + "-" + colI] = true;

    const res =
      _check(rowI + 1, colI, wordI + 1) ||
      _check(rowI - 1, colI, wordI + 1) ||
      _check(rowI, colI + 1, wordI + 1) ||
      _check(rowI, colI - 1, wordI + 1);

    if (!res) seen[rowI + "-" + colI] = false;

    return res;
  };

  let seen = null;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      seen = {};
      if (_check(r, c, 0) === true) return true;
    }
  }

  return false;
};
