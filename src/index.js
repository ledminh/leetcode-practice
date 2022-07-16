/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let i = 0,
    curString = s;

  while (i < s.length) {
    curString = s.substring(i);

    let found = false;

    for (let iW = 0; iW < wordDict.length && !found; iW++) {
      const curW = wordDict[iW];

      if (curString.indexOf(curW) === 0) {
        found = true;

        i += curW.length;
      }
    }

    if (!found) return false;
  }

  return true;
};

console.log("-----------------------");
console.log(wordBreak("leetcode", ["leet", "code"]));
