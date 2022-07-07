/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const prereqMap = {};
  const visited = {};

  const _traverse = (curCourse) => {
    if (visited[curCourse]) return false;

    visited[curCourse] = true;

    for (let i = 0; i < prereqMap[curCourse].length; i++) {
      if (_traverse(prereqMap[curCourse][i])) {
        prereqMap[curCourse].splice(i, 1);
        i--;
      } else {
        visited[curCourse] = false;
        return false;
      }
    }

    visited[curCourse] = false;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    prereqMap[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preC] = prerequisites[i];

    prereqMap[course].push(preC);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!_traverse(i)) return false;
  }

  return true;
};
