var maxSubarraySumCircular = function (nums) {
    let curMin = min = 3 * Math.pow(10, 4) + 1,
        curMax = max = -3 * Math.pow(10, 4) - 1,
        totalSum = 0

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i]
        curMax = Math.max(curMax + curNum, curNum)
        max = Math.max(curMax, max)

        curMin = Math.min(curMin + curNum, curNum)
        min = Math.min(curMin, min)

        totalSum += curNum
    }
    return max < 0 ? max : Math.max(totalSum - min, max)
}