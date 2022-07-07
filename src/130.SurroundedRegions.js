/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const _traverse = (row, col) => {
    const queue = [[row, col]];

    while (queue.length !== 0) {
      const [r, c] = queue.pop();

      board[r][c] = "T";

      if (r + 1 <= board.length - 1 && board[r + 1][c] === "O") {
        queue.push([r + 1, c]);
      }

      if (r - 1 >= 0 && board[r - 1][c] === "O") {
        queue.push([r - 1, c]);
      }

      if (c + 1 <= board[0].length - 1 && board[r][c + 1] === "O") {
        queue.push([r, c + 1]);
      }

      if (c - 1 >= 0 && board[r][c - 1] === "O") {
        queue.push([r, c - 1]);
      }
    }
  };

  for (let c = 0; c < board[0].length; c++) {
    if (board[0][c] === "O") {
      _traverse(0, c);
    }

    if (board[board.length - 1][c] === "O") {
      _traverse(board.length - 1, c);
    }
  }

  for (let r = 1; r < board.length - 1; r++) {
    if (board[r][0] === "O") {
      _traverse(r, 0);
    }

    if (board[r][board[0].length - 1] === "O") {
      _traverse(r, board[0].length - 1);
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      } else if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }
};
