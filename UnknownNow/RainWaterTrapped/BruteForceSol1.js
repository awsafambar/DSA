/*
Key Idea:
For each bar in the elevation map (height array), the amount of water it can trap depends on:

The tallest bar to its left (left_max).

The tallest bar to its right (right_max).

The water trapped at that bar is:

text
water_at_i = min(left_max, right_max) - height[i]
(If min(left_max, right_max) is smaller than height[i], no water is trapped.)
*/

var trap = function (height) {
    let sum = 0, len = height.length;

    for (let i = 0; i < len; i++) {
        let leftPtr = 0, rightPtr = 0

        for (let j = i - 1; j >= 0; j--) {
            if (leftPtr < height[j]) {
                leftPtr = height[j]
            }
        }
        for (let j = i + 1; j < len; j++) {
            if (rightPtr < height[j]) {
                rightPtr = height[j]
            }
        }
        // value at position i and add that value
        if (leftPtr > height[i] && rightPtr > height[i]) {
            sum += Math.min(leftPtr, rightPtr) - height[i]
        }
    }
    return sum
}