var maxSubarraySumCircular = function (nums) {
    const newArr = [...nums, ...nums]
    let curSum = newArr[0],
        maxSum = newArr[0]

    for (let i = 0; i < nums.length; i++) {
        curSum = 0
        for (let j = 0; j < nums.length; j++) {
            const idx = i + j
            curSum = Math.max(curSum + newArr[idx], newArr[idx])
        }
        maxSum = Math.max(curSum, maxSum)

    }

    return maxSum
}