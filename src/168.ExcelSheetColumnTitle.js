/**
 * @param {number} columnNumber
 * @return {string}
 */
const getLetter = (n) => String.fromCharCode("A".charCodeAt(0) - 1 + n);

var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber >= 1) {
    let currCharCode = columnNumber % 26;

    if (currCharCode === 0) currCharCode = 26;

    let currLetter = getLetter(currCharCode);

    result = currLetter + result;

    columnNumber = (columnNumber - currCharCode) / 26;
  }

  return result;
};
