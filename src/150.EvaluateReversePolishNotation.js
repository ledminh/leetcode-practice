/**
 * @param {string[]} tokens
 * @return {number}
 */

const isNumber = (s) => !isNaN(s);

var evalRPN = function (tokens) {
  const numsStack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isNumber(tokens[i])) numsStack.push(Number(tokens[i]));
    else {
      const op2 = numsStack.pop();
      const op1 = numsStack.pop();
      let result = 0;

      switch (tokens[i]) {
        case "+":
          result = op1 + op2;
          break;
        case "-":
          result = op1 - op2;
          break;
        case "*":
          result = op1 * op2;
          break;
        case "/":
          result = op1 / op2;
          break;
        default:
      }

      numsStack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
    }
  }

  return numsStack[0];
};
