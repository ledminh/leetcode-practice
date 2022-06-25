/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Arr = Array(26).fill(0);
  const s2Arr = Array(26).fill(0);

  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - aCharCode]++;
    s2Arr[s2.charCodeAt(i) - aCharCode]++;
  }

  let matches = 0;

  for (let i = 0; i < s1Arr.length; i++) {
    if (s1Arr[i] === s2Arr[i]) matches++;
  }

  let start = 0,
    end = s1.length - 1;

  while (end < s2.length) {
    if (matches !== 26) {
      const startCharCode = s2.charCodeAt(start) - aCharCode;

      if (s2Arr[startCharCode] === s1Arr[startCharCode]) matches--;

      s2Arr[startCharCode]--;

      if (s2Arr[startCharCode] === s1Arr[startCharCode]) matches++;

      start++;

      end++;

      const endCharCode = s2.charCodeAt(end) - aCharCode;

      if (s2Arr[endCharCode] === s1Arr[endCharCode]) matches--;

      s2Arr[endCharCode]++;

      if (s2Arr[endCharCode] === s1Arr[endCharCode]) matches++;
    } else {
      return true;
    }
  }

  return false;
};

console.log("======================");
console.log(checkInclusion("ab", "eidbaooo"));
