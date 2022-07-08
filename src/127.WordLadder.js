/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const adjList = {};

  wordList.push(beginWord);

  for (let i = 0; i < wordList.length; i++) {
    const curWord = wordList[i];

    for (let iW = 0; iW < curWord.length; iW++) {
      const pattern =
        curWord.substring(0, iW) + "*" + curWord.substring(iW + 1);

      if (!adjList[pattern]) {
        adjList[pattern] = [curWord];
      } else if (!adjList[pattern].includes(curWord)) {
        adjList[pattern].push(curWord);
      }
    }
  }

  let curSet = [beginWord];
  let steps = 1;

  const visited = {};

  while (curSet.length !== 0) {
    steps++;
    const tempSet = [];

    for (let iS = 0; iS < curSet.length; iS++) {
      const curWord = curSet[iS];

      visited[curWord] = true;

      for (let iW = 0; iW < curWord.length; iW++) {
        const pattern =
          curWord.substring(0, iW) + "*" + curWord.substring(iW + 1);

        const curNeighbors = adjList[pattern].filter((w) => !visited[w]);

        if (curNeighbors.includes(endWord)) {
          return steps;
        } else {
          for (let i = 0; i < curNeighbors.length; i++) {
            if (!tempSet.includes(curNeighbors[i])) {
              tempSet.push(curNeighbors[i]);
            }
          }
        }
      }
    }
    curSet = tempSet;
  }

  return 0;
};
