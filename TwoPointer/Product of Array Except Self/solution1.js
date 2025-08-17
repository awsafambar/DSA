/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    let totalMultiply = 1, countOfZeros = 0, zeroIndex;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            countOfZeros++
            if (countOfZeros > 1)
                return Array(n).fill(0)

            zeroIndex = i
        }
        else
            totalMultiply *= nums[i]
    }
    if (countOfZeros) {
        let arr = Array(n).fill(0)
        arr[zeroIndex] = totalMultiply
        return arr
    }
    let arr = Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        arr[i] = totalMultiply / nums[i]
    }

    return arr

};