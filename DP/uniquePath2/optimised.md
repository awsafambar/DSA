space complexity will be decreased as no need of cur array

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const row = obstacleGrid.length,
        col = obstacleGrid[0].length

    if (obstacleGrid[0][0] || obstacleGrid[row - 1][col - 1])
        return 0

    let dp = Array(col).fill(0)
    dp[0] = 1
    for (let i = 0; i < row; i++) {
        dp[0] = obstacleGrid[i][0] ? 0 : dp[0]

        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j])
                dp[j] = 0
            else
                dp[j] = dp[j - 1] + dp[j]
        }
    }

    return dp[col - 1]

};