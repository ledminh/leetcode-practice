/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let tempBuf = [];

    while (buf.length < n && read4(tempBuf)) {
      buf.splice(buf.length, 0, ...tempBuf);

      tempBuf = [];
    }

    if (buf.length > n) {
      buf.splice(n);
    }

    return buf.length;
  };
};
