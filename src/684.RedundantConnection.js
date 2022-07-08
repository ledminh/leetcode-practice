/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parents = Array(edges.length)
    .fill(1)
    .map((val, i) => val + i);
  const ranks = Array(edges.length).fill(1);

  const _find = (v) => {
    if (parents[v - 1] === v) return v;

    while (parents[v - 1] !== v) {
      v = parents[v - 1];
    }

    return v;
  };

  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];

    const headV1 = _find(v1);
    const headV2 = _find(v2);

    if (headV1 === headV2) return [v1, v2];
    else if (ranks[headV1 - 1] > ranks[headV2 - 1]) {
      parents[headV2 - 1] = headV1;
      ranks[headV1 - 1] += ranks[headV2 - 1];
    } else {
      parents[headV1 - 1] = headV2;
      ranks[headV2 - 1] += ranks[headV1 - 1];
    }
  }
};
