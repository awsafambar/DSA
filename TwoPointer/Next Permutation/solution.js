var nextPermutation = function (nums) {
    const len = nums.length
    if (len > 1) {
        // part 1 find the index of decresing point from back
        let i = len - 2
        while (nums[i] >= nums[i + 1]) {
            i--
        }
        // already in decreasing
        if (i < 0) {
            nums.reverse()
            return
        }

        //part 2. find NEXT GREATER and swap
        // find
        let nextGreater = i + 1
        for (let j = nextGreater + 1; j < len; j++) {
            console.log({ nextGreater })
            if (nums[i] < nums[j] && nums[nextGreater] >= nums[j]) {
                nextGreater = j
            }
        }
        // swap
        [nums[i], nums[nextGreater]] = [nums[nextGreater], nums[i]]

        // Part 3. reverse the right part from right side to make it increasing and lowest value
        for (let k = i + 1, l = len - 1; k < len, l > k; k++, l--) {
            [nums[k], nums[l]] = [nums[l], nums[k]]
        }

    }

}