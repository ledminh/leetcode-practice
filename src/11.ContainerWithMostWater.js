/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0,
    end = height.length - 1,
    maxArea = 0;

  while (start < end) {
    const area = (end - start) * Math.min(height[start], height[end]);

    if (area > maxArea) maxArea = area;

    if (height[start] > height[end]) {
      end--;
    } else start++;
  }

  return maxArea;
};
