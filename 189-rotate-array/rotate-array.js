var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // Normalize k to avoid unnecessary rotations

    if (k === 0) return; // No need to rotate if k is 0

    // Helper function to reverse parts of the array
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    // Reverse the whole array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the rest of the array
    reverse(k, n - 1);
};

// Example usage:
let nums1 = [1,2,3,4,5,6,7];
let k1 = 3;
rotate(nums1, k1);
console.log(nums1); // Output: [5,6,7,1,2,3,4]

let nums2 = [-1,-100,3,99];
let k2 = 2;
rotate(nums2, k2);
console.log(nums2); // Output: [3,99,-1,-100]
