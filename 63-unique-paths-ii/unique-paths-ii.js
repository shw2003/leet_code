/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1) return 0;

    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
        }
    }

    return dp[rows - 1][cols - 1];
};