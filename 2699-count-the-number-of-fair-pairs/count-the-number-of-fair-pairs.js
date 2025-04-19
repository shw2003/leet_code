function countFairPairs(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    let count = 0;

    const lowerBound = (arr, target, start) => {
        let l = start, r = arr.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] < target) l = mid + 1;
            else r = mid;
        }
        return l;
    };

    const upperBound = (arr, target, start) => {
        let l = start, r = arr.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] <= target) l = mid + 1;
            else r = mid;
        }
        return l;
    };

    for (let i = 0; i < nums.length; i++) {
        let left = lowerBound(nums, lower - nums[i], i + 1);
        let right = upperBound(nums, upper - nums[i], i + 1);
        count += (right - left);
    }

    return count;
}

// \U0001f539 Test Input:
const nums = [1, 7, 9, 2, 5];
const lower = 11;
const upper = 11;

// \U0001f539 Output:
console.log(countFairPairs(nums, lower, upper)); // Output: 1
