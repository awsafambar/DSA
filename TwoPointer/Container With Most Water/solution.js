var maxArea = function (height) {
    const n = height.length

    let left = 0, right = n - 1, water = 0

    while (left < right) {
        // left Side Lower
        if (height[left] < height[right]) {
            water = Math.max(water, height[left] * (right - left))
            left++;
        }
        else {
            water = Math.max(water, height[right] * (right - left))
            right--
        }

    }
    return water
}