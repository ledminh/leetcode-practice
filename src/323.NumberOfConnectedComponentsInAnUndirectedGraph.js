/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const parents = Array(n)
    .fill(0)
    .map((val, i) => i);
  const ranks = Array(n).fill(1);

  const _find = (v) => {
    while (parents[v] !== v) {
      v = parents[v];
    }

    return v;
  };

  let numGroups = n;

  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];

    const headV1 = _find(v1);
    const headV2 = _find(v2);

    if (headV1 !== headV2) {
      if (ranks[headV1] > ranks[headV2]) {
        parents[headV2] = headV1;
        ranks[headV1] += ranks[headV2];
      } else {
        parents[headV1] = headV2;
        ranks[headV2] += ranks[headV1];
      }

      numGroups--;
    }
  }

  return numGroups;
};
