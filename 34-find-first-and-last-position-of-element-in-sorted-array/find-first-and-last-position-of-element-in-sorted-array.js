/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findFirst(nums, target) {
    let index = -1;
    let left = 0, right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;       // record the index
        right = mid - 1;   // keep searching on the left
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  // Helper function to find the rightmost (last) index
  function findLast(nums, target) {
    let index = -1;
    let left = 0, right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;       // record the index
        left = mid + 1;    // keep searching on the right
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  return [findFirst(nums, target), findLast(nums, target)];
};