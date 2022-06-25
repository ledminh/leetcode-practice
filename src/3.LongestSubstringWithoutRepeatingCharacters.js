/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let start = 0,
    end = 1,
    maxL = 0;

  const cache = { [s.charAt(start)]: true };

  while (end < s.length) {
    if (cache[s.charAt(end)]) {
      const length = end - start;
      if (length > maxL) maxL = length;

      while (start < end && cache[s.charAt(end)]) {
        cache[s.charAt(start)] = false;
        start++;
      }
    } else {
      cache[s.charAt(end)] = true;
      end++;
    }
  }

  return maxL > end - start ? maxL : end - start;
};
