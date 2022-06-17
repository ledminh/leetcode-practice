/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const _shift = (arr, index, maxI) => {
  let currI = maxI;

  while (currI >= index) {
    arr[currI + 1] = arr[currI];
    currI--;
  }
};

var merge = function (nums1, m, nums2, n) {
  let i1 = 0,
    i2 = 0,
    maxI1 = m - 1;

  while (i2 < n) {
    const elem2 = nums2[i2];

    while (elem2 >= nums1[i1] && i1 <= maxI1) {
      i1++;
    }

    _shift(nums1, i1, maxI1);

    nums1[i1] = elem2;

    i2++;
    maxI1++;
  }
};
