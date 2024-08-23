/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
const n = nums.length;
  let exp = n*(n+1)/2;
  let act = nums.reduce((acc, curr) => acc+curr, 0);

  return exp-act;
   
};