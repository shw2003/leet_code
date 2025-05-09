/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
     const n = nums.length;
  const dp = new Array(n).fill(-1);

  function solve(i) {
    if (i === 0) return nums[0];
    if (i < 0) return 0;
    if (dp[i] !== -1) return dp[i];

    const pick = nums[i] + solve(i - 2);
    const notPick = solve(i - 1);

    return dp[i] = Math.max(pick, notPick);
  }

  return solve(n - 1);
};