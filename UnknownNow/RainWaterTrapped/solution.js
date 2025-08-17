/*
two pointer approach to calculate the water trapped between the bars
Time Complexity: O(n)
Space Complexity: O(1)

solution is very easy. Just like other two brute for solution where we calculate the leftMax and rightMax
here also we need to keep track of the leftMax and rightMax
and then calculate the water trapped at each index.

Main solution is based on each index what will be the leftIndex and what will be the right Index.
*/
var trap = function(height){
    const n = height.length
    let leftMax = height[0],rightMax=height[n-1], left=0,right = n-1, sum = 0

    while(left<right){  
        // water trapped Left side
        if(height[left]<height[right]){
            if(height[left] > leftMax)
                leftMax = height[left]
            
            else
                sum += leftMax - height[left]
            
            left++
        }

        // water trapped right side or equal
        else{
            if(height[right]>rightMax)
                rightMax = height[right]
            
            else
                sum += rightMax- height[right]

            right--
        }
    }

    return sum
}