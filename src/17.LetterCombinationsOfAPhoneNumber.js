/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];

  const digitsToLetter = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const _combine = (iD, s) => {
    if (iD === digits.length) {
      if (s.length !== 0) res.push(s);
      return;
    }

    const currArr = digitsToLetter[digits[iD]];

    for (let iCurrArr = 0; iCurrArr < currArr.length; iCurrArr++) {
      _combine(iD + 1, s + currArr[iCurrArr]);
    }
  };

  _combine(0, "");

  return res;
};
