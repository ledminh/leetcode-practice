/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let resultStr = "";

  for (let i = 0; i < strs.length; i++) {
    const currStr = strs[i];

    resultStr += currStr.length + "#" + currStr;
  }

  return resultStr;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const strs = [];

  while (s.length !== 0) {
    let iP = s.indexOf("#"),
      length = Number(s.substring(0, iP)),
      currStr = s.substring(iP + 1, iP + 1 + length);

    s = s.substring(iP + 1 + length);
    strs.push(currStr);
  }

  return strs;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
