/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   let count = 0, prefixSum = 0;
    let prefixSumMap = new Map();
    prefixSumMap.set(0, 1); // Handle subarrays starting from index 0

    for (let num of nums) {
        prefixSum += num;

        // Check if (prefixSum - k) exists in map
        if (prefixSumMap.has(prefixSum - k)) {
            count += prefixSumMap.get(prefixSum - k);
        }

        // Update prefix sum frequency in the map
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }

  return count;
};