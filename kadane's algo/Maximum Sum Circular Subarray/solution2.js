var maxSubarraySumCircular = function (nums) {
    // part 1 find maxSum using kadane's Algo and 
    const len = nums.length, minNum = -3 * Math.pow(10, 4) - 1, maxNum = 3 * Math.pow(10, 4) + 1
    let maxSumNonCicular = curSum = nums[0],
        prefixSumArr = Array(len).fill(minNum),
        suffixSumArr = Array(len).fill(maxNum)

    prefixSumArr[0] = prefixSum = nums[0]

    for (let i = 1; i < len; i++) {
        const curNum = nums[i]
        curSum = Math.max(curSum + curNum, curNum)
        maxSumNonCicular = Math.max(curSum, maxSumNonCicular)

        // part 2 let's see if i can adjust prefix i.e. left Sum in same loop

        prefixSum += curNum
        prefixSumArr[i] = Math.max(prefixSum, prefixSumArr[i - 1])
    }

    // part 3 SuffixSum
    suffixSumArr[len - 1] = prefixSum = nums[len - 1]
    maxSumCicular = minNum
    for (let i = len - 2; i >= 0; i--) {
        const curNum = nums[i]
        // part 4 let's see if i can adjust maxSum and suffixSum
        prefixSum += curNum
        suffixSumArr[i] = Math.max(prefixSum, suffixSumArr[i + 1])
        maxSumCicular = Math.max(maxSumCicular, prefixSumArr[i] + suffixSumArr[i + 1])
    }

    return Math.max(maxSumCicular, maxSumNonCicular)
}