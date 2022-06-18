/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];

  if (numRows === 2) return [[1], [1, 1]];

  const arr = generate(numRows - 1);
  const prevRow = arr[arr.length - 1];
  const currRow = [1];

  for (let i = 0; i < prevRow.length - 1; i++) {
    currRow.push(prevRow[i] + prevRow[i + 1]);
  }

  currRow.push(1);

  arr.push(currRow);

  return arr;
};
