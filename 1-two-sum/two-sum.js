/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {};

    for(let i = 0;i < nums.length; i++) {
        let compl = target - nums[i];

        if(hashmap.hasOwnProperty(compl)) {
            return [hashmap[compl], i];
        }

        hashmap[nums[i]] = i;
    }

    return [];
};