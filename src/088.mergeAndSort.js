// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

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
