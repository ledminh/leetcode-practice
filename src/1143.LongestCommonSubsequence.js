var longestCommonSubsequence = function (text1, text2) {
  const cache = Array(text1.length)
    .fill(0)
    .map((_) => new Array(text2.length));

  const traverse = (i1, i2) => {
    if (i1 === text1.length || i2 === text2.length) return 0;
    if (cache[i1][i2] !== undefined) return cache[i1][i2];

    let result = null;
    if (text1[i1] === text2[i2]) {
      result = 1 + traverse(i1 + 1, i2 + 1);
    } else {
      result = Math.max(traverse(i1 + 1, i2), traverse(i1, i2 + 1));
    }

    cache[i1][i2] = result;

    return result;
  };

  return traverse(0, 0);
};
