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
    dp[0] = 1 // first column will always be 1 if no obstacle in first cell
    for (let i = 0; i < row; i++) {
        let cur = []
        cur[0] = obstacleGrid[i][0] ? 0 : dp[0] 
        // if current row current column has obstacle then current will be 0.
        // if above row of same column has obstacle then current will be 0 so dp[0]

        for (let j = 1; j < col; j++) {
            if (obstacleGrid[i][j])
                cur[j] = 0
            else
                cur[j] = cur[j - 1] + dp[j]
        }
        dp = [...cur]
    }

    return dp[col - 1]

};