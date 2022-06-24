/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const maxLArr = [];
  let maxL = 0;

  for (let i = 0; i < height.length; i++) {
    maxLArr.push(maxL);
    if (maxL < height[i]) maxL = height[i];
  }

  const maxRArr = Array(height.length);
  let maxR = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    maxRArr[i] = maxR;
    if (maxR < height[i]) maxR = height[i];
  }

  let numUnits = 0;

  for (let i = 0; i < height.length; i++) {
    const currUnits = Math.min(maxLArr[i], maxRArr[i]) - height[i];

    numUnits += currUnits > 0 ? currUnits : 0;
  }

  return numUnits;
};
