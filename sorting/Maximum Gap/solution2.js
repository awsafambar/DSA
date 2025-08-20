/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    // do radix sort simply then a for Loop
    const size = nums.length
    if (size < 2)
        return 0;

    const maxNumber = Math.max(...nums)
    const countSort = (num) => {
        const countArr = Array(10).fill(0)
        let result = new Array(size)
        nums.forEach((a) => {
            const idx = Math.floor(a / num) % 10
            countArr[idx]++
        })

        for (let i = 1; i < 10; i++) {
            countArr[i] += countArr[i - 1]
        }

        // save output
        for (let i = size - 1; i >= 0; i--) {
            const val = Math.floor(nums[i] / num) % 10
            const idx = countArr[val] - 1
            result[idx] = nums[i]
            countArr[val]--
        }

        for (let i = 0; i < size; i++) {
            nums[i] = result[i]
        }
    }

    for (let i = 1; Math.floor(maxNumber / i) > 0; i *= 10) {
        countSort(i)
    }

    let maxGap = 0

    for (let i = 1; i < size; i++) {
        maxGap = Math.max(maxGap,nums[i] - nums[i - 1])
    }

    return maxGap

};