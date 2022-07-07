/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const prereqMap = {},
    visited = {},
    takens = {},
    result = [];

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

    if (!takens[curCourse]) {
      result.push(curCourse);
      takens[curCourse] = true;
    }

    visited[curCourse] = false;

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    prereqMap[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prereq] = prerequisites[i];

    prereqMap[course].push(prereq);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!_traverse(i)) return [];
  }

  return result;
};
