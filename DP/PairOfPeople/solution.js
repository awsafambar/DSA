var solve = function (p) {
    const dp = []
    dp[0] = 1
    dp[1] = 2
    for(let i = 2; i< p; i++){
      dp[i] = dp[i-1] + i*dp[i-2]
    }
    return dp[p-1]
};
