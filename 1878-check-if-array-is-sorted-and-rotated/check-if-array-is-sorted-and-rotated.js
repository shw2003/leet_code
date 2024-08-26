/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            count++;
        }
    }
    // Check the last element with the first element
    if (nums[nums.length - 1] > nums[0]) {
        count++;
    }
    return count <= 1;
};