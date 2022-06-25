/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];

  const _generate = (openNum, endNum, str) => {
    if (openNum === endNum && openNum === n) {
      results.push(str);
      return;
    }

    if (openNum < n) {
      _generate(openNum + 1, endNum, str + "(");
    }

    if (endNum < openNum) {
      _generate(openNum, endNum + 1, str + ")");
    }
  };

  _generate(0, 0, "");

  return results;
};
