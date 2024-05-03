/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    

    let n = nums.length; // size of the array.

    // Step 1: Find the break point:
    let ind = -1; // break point
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            // index i is the break point
            ind = i;
            break;
        }
    }

    // If break point does not exist:
    if (ind == -1) {
        // reverse the whole array:
        nums.reverse();
        return nums;
    }

    // Step 2: Find the next greater element
    //         and swap it with nums[ind]:

    for (let i = n - 1; i > ind; i--) {
        if (nums[i] > nums[ind]) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]]; // swap nums[i] and nums[ind]
            break;
        }
    }

    // Step 3: reverse the right half:
    nums.splice(ind + 1, n - ind - 1, ...nums.slice(ind + 1).reverse());

    return nums;
}


