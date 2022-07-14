/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const cache = {
    [s.length]: 1
  };

  const dfs = (i) => {
    if (cache[i]) {
      return cache[i];
    }

    let res = 0;

    if (s[i] === "0") {
      return 0;
    }

    res += dfs(i + 1);

    if (
      i < s.length - 1 &&
      (Number(s[i]) === 1 || (Number(s[i]) === 2 && Number(s[i + 1]) < 7))
    )
      res += dfs(i + 2);

    cache[i] = res;

    return res;
  };

  return dfs(0);
};
