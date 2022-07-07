/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const _traverse = (row, col) => {
    let curRooms = [[row, col]];

    let distance = 1;

    while (curRooms.length !== 0) {
      const newCurRooms = [];

      for (let i = 0; i < curRooms.length; i++) {
        const [r, c] = curRooms[i];

        if (r + 1 <= rooms.length - 1 && rooms[r + 1][c] > distance) {
          rooms[r + 1][c] = distance;

          newCurRooms.push([r + 1, c]);
        }

        if (r - 1 >= 0 && rooms[r - 1][c] > distance) {
          rooms[r - 1][c] = distance;

          newCurRooms.push([r - 1, c]);
        }

        if (c + 1 <= rooms[0].length - 1 && rooms[r][c + 1] > distance) {
          rooms[r][c + 1] = distance;

          if (c === 6) {
            console.log(distance);
          }
          newCurRooms.push([r, c + 1]);
        }

        if (c - 1 >= 0 && rooms[r][c - 1] > distance) {
          rooms[r][c - 1] = distance;

          newCurRooms.push([r, c - 1]);
        }
      }

      distance++;

      curRooms = newCurRooms;
    }
  };

  for (let r = 0; r < rooms.length; r++) {
    for (let c = 0; c < rooms[0].length; c++) {
      if (rooms[r][c] === 0) _traverse(r, c);
    }
  }
};
