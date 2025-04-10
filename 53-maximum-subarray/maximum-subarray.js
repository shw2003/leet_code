/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSUm = nums[0];

    for(let i = 1; i< nums.length; i++) {
        currentSum  = Math.max(nums[i], currentSum + nums[i]);
        maxSUm = Math.max(maxSUm, currentSum);
    }
     return maxSUm;
};