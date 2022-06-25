/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [],
    answers = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length > 0) {
      let topElem = stack[stack.length - 1];
      while (topElem && topElem[0] < temperatures[i]) {
        answers[topElem[1]] = i - topElem[1];

        stack.pop();
        topElem = stack.length > 0 ? stack[stack.length - 1] : null;
      }
    }

    stack.push([temperatures[i], i]);
  }

  return answers;
};
console.log("-------------------");
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

//expect: [1,1,4,2,1,1,0,0]
