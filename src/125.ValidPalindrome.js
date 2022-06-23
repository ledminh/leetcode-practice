/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sArr = s
    .toLowerCase()
    .split("")
    .filter((c) => /[A-Za-z0-9]/.test(c));

  let start = 0,
    end = sArr.length - 1;

  while (start < end) {
    if (sArr[start] !== sArr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};
