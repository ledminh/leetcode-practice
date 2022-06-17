function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function _createBST(arr, start, end) {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2),
    val = arr[mid];

  const left = _createBST(arr, start, mid - 1);
  const right = _createBST(arr, mid + 1, end);

  return new TreeNode(val, left, right);
}

var sortedArrayToBST = function (nums) {
  let start = 0,
    end = nums.length - 1,
    mid = Math.floor((start + end) / 2),
    val = nums[mid];

  const left = _createBST(nums, start, mid - 1);
  const right = _createBST(nums, mid + 1, end);

  return new TreeNode(val, left, right);
};
