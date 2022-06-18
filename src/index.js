/**
 * @param {string} s
 * @return {boolean}
 */

const isAlphabet = (str) => /[a-zA-Z]/.test(str);

var isPalindrome = function (s) {
  const sArr = s
    .toLowerCase()
    .split("")
    .filter((c) => isAlphabet(c));

  for (let i = 0; i < sArr.length / 2; i++) {
    if (sArr[i] !== sArr[sArr.length - i - 1]) return false;
  }

  return true;
};

console.log(isPalindrome("0P"));
