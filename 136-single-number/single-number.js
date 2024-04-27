/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xorr = 0;
        for(let i = 0;i<nums.length;i++){
            xorr = xorr^nums[i];
        }
        return xorr;
};