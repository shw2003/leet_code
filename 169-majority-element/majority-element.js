/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const freq = {};

    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        if(freq[num] >  Math.floor(n / 2)) return num;
    }
};