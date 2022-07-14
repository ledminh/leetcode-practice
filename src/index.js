/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const isPalindrome = (iS, iE) => {
    let iStart = iS,
      iEnd = iE;

    while (iStart < iEnd && s[iStart] === s[iEnd]) {
      iStart++;
      iEnd--;
    }

    return iStart >= iEnd;
  };

  let iStart = 0,
    iEnd = 0;

  let result = [0, 0]; //[iStart, iEnd]
  while (iEnd < s.length) {
    if (isPalindrome(iStart, iEnd)) {
      iEnd++;
    } else {
      if (result[1] - result[0] < iEnd - 1 - iStart)
        result = [iStart, iEnd - 1];

      iStart++;
    }

    console.log(s.substring(iStart, iEnd + 1));
  }

  return s.substring(result[0], result[1] + 1);
};

console.log("---------------");
console.log(longestPalindrome("babad"));
