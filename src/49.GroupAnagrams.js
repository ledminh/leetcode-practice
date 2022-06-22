// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */

// const hasAnagram = (arr, str) => {
//   let testStr = arr[0];

//   if(testStr.length !== str.length) return false;

//   let alphabetArr = Array(26).fill(0);

//   const charCodeA = 'a'.charCodeAt(0);

//   for(let i = 0; i < testStr.length; i++) {
//       alphabetArr[testStr.charCodeAt(i) - charCodeA]++;
//       alphabetArr[str.charCodeAt(i) - charCodeA]--;
//   }

//   for(let i = 0; i < alphabetArr.length; i++) {
//       if(alphabetArr[i] !== 0) return false;
//   }

//   return true;

// }

// const findAnagrams = (str, results) => {
//   for(let i = 0; i < results.length; i++) {
//       if(hasAnagram(results[i], str))
//           return i
//   }

//   return null;

// }

// var groupAnagrams = function(strs) {
//   const results = [];

//   for(let i  = 0; i < strs.length; i++) {
//       let anagramsIndex = findAnagrams(strs[i], results)
//       if(anagramsIndex === null){
//           results.push([strs[i]]);
//       }
//       else {
//           results[anagramsIndex].push(strs[i]);
//       }
//   }

//   return results;

// };

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
