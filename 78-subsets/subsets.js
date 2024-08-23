/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function generateSubSeq (nums, index, curr, result) {
    if(index === nums.length) {
        result.push([...curr]);
        return ;
    }
    //include
    curr.push(nums[index]);
generateSubSeq(nums, index + 1, curr , result);

//exclu
curr.pop();
generateSubSeq(nums, index + 1, curr , result);

    


} 

var subsets = function(nums) {
    let result = [];
    generateSubSeq(nums, 0, [], result);

    result.sort();

    return result;
};