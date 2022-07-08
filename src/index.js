/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const nodesMap = [];

  const findHead = (vertex) => {
    if (nodesMap[vertex - 1][0] === vertex) return vertex;

    return findHead(nodesMap[vertex - 1][0]);
  };

  for (let i = 0; i < 5; i++) {
    const parentNode = i + 1,
      size = 1;
    nodesMap.push([parentNode, size]);
  }

  // for (let i = 0; i < edges.length; i++) {
  //   const parentNode = i + 1,
  //     size = 1;
  //   nodesMap.push([parentNode, size]);
  // }

  for (let i = 0; i < edges.length; i++) {
    const [v1, v2] = edges[i];

    const [v1Parent, v1Size] = nodesMap[v1 - 1];
    const [v2Parent, v2Size] = nodesMap[v2 - 1];

    const v1Head = findHead(v1Parent);
    const v2Head = findHead(v2Parent);

    if (v1Head === v2Head) {
      return [v1, v2];
    } else if (v1Size > v2Size) {
      nodesMap[v2 - 1][0] = v1Parent;

      const newSize = nodesMap[v1 - 1][1] + nodesMap[v2 - 1][1];

      nodesMap[v1 - 1][1] = newSize;
      nodesMap[v2 - 1][1] = newSize;
    } else {
      nodesMap[v1 - 1][0] = v2Parent;

      const newSize = nodesMap[v1 - 1][1] + nodesMap[v2 - 1][1];
      nodesMap[v1 - 1][1] = newSize;
      nodesMap[v2 - 1][1] = newSize;
    }
  }

  console.log(nodesMap);
};

console.log("----------------------");
console.log(
  findRedundantConnection([
    [1, 5],
    [3, 4]
    // [3, 5],
    // [4, 5],
    // [2, 4]
  ])
);
