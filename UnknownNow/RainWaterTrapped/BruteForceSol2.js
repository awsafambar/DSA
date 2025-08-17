/*
    calculating the leftMax and RightMax before only using single loop or double loop 
    before at each index. 
    Like a tabulation approach, we calculate the leftMax and rightMax for each index
    and then use them to calculate the water trapped at each index.
    This reduces the time complexity to O(n) and space complexity to O(n).
    This is a more efficient solution compared to the brute force approach.
    Time Complexity: O(2n)
    Space Complexity: O(n)
*/
var trap = function (height){
    const n = height.length;
    let leftMaxArr = Array(n).fill(0),
        rightMaxArr = Array(n).fill(0)

    leftMaxArr[0] = height[0]
    rightMaxArr[n - 1] = height[n - 1]

    for (let i = 1, j = n - 2; i < n, j >= 0; i++, j--) {
        leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i])
        rightMaxArr[j] = Math.max(rightMaxArr[j + 1], height[j])
    }
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (leftMaxArr[i] > height[i] && rightMaxArr[i] > height[i])
            sum += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]
    }

    return sum
}
