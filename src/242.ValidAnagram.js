/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const arr = Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - aCharCode]++;
    arr[t.charCodeAt(i) - aCharCode]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) return false;
  }

  return true;
};
