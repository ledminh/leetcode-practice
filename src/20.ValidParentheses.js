/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const openBrackets = { ")": "(", "}": "{", "]": "[" };
  const closeBrackets = Object.keys(openBrackets);

  let i = 0,
    currChar = s.charAt(i);

  while (i < s.length) {
    if (!closeBrackets.includes(currChar)) {
      stack.push(currChar);
    } else {
      if (stack[stack.length - 1] === openBrackets[currChar]) {
        stack.pop();
      } else {
        return false;
      }
    }

    i++;
    currChar = s.charAt(i);
  }

  return stack.length === 0;
};

console.log("===========================");
console.log(isValid("()"));
