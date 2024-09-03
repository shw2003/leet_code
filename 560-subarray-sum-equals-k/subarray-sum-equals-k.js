/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n = nums.length; // Size of the given array
  const map = new Map();
  let preSum = 0; // Variable to store the prefix sum
  let cnt = 0; // Variable to store the count of subarrays

  // Initialize the map with 0 having 1 occurrence
  map.set(0, 1);

  for (let i = 0; i < n; i++) {
    // Add the current element to the prefix sum
    preSum += nums[i];

    // Calculate the value to remove (preSum - k)
    const remove = preSum - k;

    // If remove is found in the map, it means there is a subarray that sums to k
    if (map.has(remove)) {
      cnt += map.get(remove); // Increment count by the number of times remove has occurred
    }

    // Update the count of the current prefix sum in the map
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }

  return cnt;
};