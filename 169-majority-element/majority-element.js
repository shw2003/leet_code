/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let cand = null;

    for(let num of nums){
        if(count === 0){

        cand = num;
        } 
         count += (num === cand) ? 1 : -1;
    }

     return cand;
};