/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const cache = {};

  const _traverse = (str) => {
    if (cache[str] !== undefined) return cache[str];

    if (str === "") return true;

    let found = false;

    for (let iW = 0; iW < wordDict.length && !found; iW++) {
      const curW = wordDict[iW];

      if (str.indexOf(curW) === 0) {
        if (_traverse(str.substring(curW.length))) found = true;
      }
    }

    cache[str] = found;

    return found;
  };

  for (let iW = 0; iW < wordDict.length; iW++) {
    const curW = wordDict[iW];

    if (s.indexOf(curW) === 0) {
      if (_traverse(s.substring(curW.length))) return true;
    }
  }

  return false;
};
