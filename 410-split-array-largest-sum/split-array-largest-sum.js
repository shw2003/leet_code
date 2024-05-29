/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums);

    let high = nums.reduce((acc, curr) => acc + curr, 0);

    // for(let maxSum = low; maxSum <= high; maxSum++) {
    //     if(countPartitions(nums, maxSum) === k) {
    //         return maxSum;
    //     }
    
    // }

    while(low <= high) {
    let mid = Math.floor((low +high) / 2);
    let partition = countPartitions(nums, mid);
    if(partition > k) {
        low = mid +1;
    } else{
        high = mid - 1;
    }
}
    return low;  
};

function countPartitions(a, maxSum) {
let n = a.length;
let subarraySum = 0;
let partition = 1;


    for(let i = 0; i<n;i++) {
        if(subarraySum + a[i] <= maxSum) {
            subarraySum += a[i];
        }
        else {
            partition++;
            subarraySum = a[i];
        }
    }
    return partition;
}