/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];

  const isPalindrome = (str) => {
    let start = 0,
      end = str.length - 1;

    while (start <= end) {
      if (str[start] !== str[end]) return false;

      start++;
      end--;
    }

    return str[start] === str[end];
  };
  const _partition = (str, collectArr) => {
    if (str.length === 0) {
      res.push(collectArr);
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      const currStr = str.substring(0, i);
      const newCollectArr = [...collectArr];

      if (isPalindrome(currStr)) {
        newCollectArr.push(currStr);
        _partition(str.substring(i), [...newCollectArr]);
      }
    }
  };

  _partition(s, []);

  return res;
};
