/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const adjList = {};

  for (let iA = 0; iA < words.length; iA++) {
    for (let iW = 0; iW < words[iA].length; iW++) {
      if (!adjList[words[iA][iW]]) {
        adjList[words[iA][iW]] = [];
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i],
      w2 = words[i + 1];

    if (w1.indexOf(w2) === 0 && w1.length > w2.length) {
      return "";
    }

    const minLen = Math.min(w1.length, w2.length);

    for (let i = 0; i < minLen; i++) {
      if (w1[i] !== w2[i]) {
        adjList[w1[i]].push(w2[i]);
        break;
      }
    }
  }

  const visited = {};
  let resArr = [];

  const _dfs = (c, result) => {
    if (visited[c]) return null;

    visited[c] = true;

    for (let i = 0; i < adjList[c].length; i++) {
      if (_dfs(adjList[c][i], result) === null) return null;
    }

    visited[c] = false;

    result.push(c);
    return result;
  };

  const chars = Object.keys(adjList);

  for (let i = 0; i < chars.length; i++) {
    const res = _dfs(chars[i], []);

    if (res) {
      for (let i = 0; i < res.length; i++) {
        if (resArr.indexOf(res[i]) === -1) {
          resArr.push(res[i]);
        }
      }
    } else {
      return "";
    }
  }

  return resArr.reverse().join("");
};
