var productExceptSelf = function (nums) {
    const l = nums.length
    let ans = Array(l).fill(1)

    let left = 1
    // prefix Multiply one less
    nums.forEach((num, i) => {
        ans[i] = left
        left *= nums[i]
    })
    let right = 1
    // same as prefix.
    // keep in mind as tarpping rain water 
    // value at a place is left * right (prefix*suffix)
    for (let i = l - 1; i >= 0; i--) {
        ans[i] *= right
        right *= nums[i]
    }

    return ans
}