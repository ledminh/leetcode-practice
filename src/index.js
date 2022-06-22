/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const assembleObj = {};
  const charCodeA = "a".charCodeAt(0);

  for (let i = 0; i < strs.length; i++) {
    const currStr = strs[i];

    const alphabetArr = Array(26).fill(0);

    for (let j = 0; j < currStr.length; j++) {
      alphabetArr[currStr.charCodeAt(j) - charCodeA]++;
    }

    const alphabetStr = alphabetArr.join("#");

    if (!assembleObj[alphabetStr]) assembleObj[alphabetStr] = [currStr];
    else assembleObj[alphabetStr].push(currStr);
  }

  const result = Object.keys(assembleObj).reduce((r, key) => {
    r.push(assembleObj[key]);
    return r;
  }, []);

  return result;
};

console.log("=======================");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
