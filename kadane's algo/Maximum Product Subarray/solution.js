var maxProduct = function(nums) {
    let max = Math.max(...nums), minCurMul = maxCurMul = 1

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i]
        if (!curNum) {
            minCurMul = maxCurMul = 1
            continue;
        }
        
        const supposedMinVal = minCurMul * curNum,
            supposedMaxVal = maxCurMul * curNum

        minCurMul = Math.min(supposedMinVal, supposedMaxVal, curNum)
        maxCurMul = Math.max(supposedMinVal, supposedMaxVal, curNum)

        max = Math.max(max, maxCurMul)
    }

    return max
}