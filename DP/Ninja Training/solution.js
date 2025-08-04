

class Solution {
    // Function to find the maximum points among all the possible ones.
    maximumPoints(arr) {
        // your code here
        // step 1 save first day as entry -  1 d array
        // save each previous day max if task for all
        
        /*
            dp[3] = [1,2,5],
            result[0] = Max of(dp)
            for(i=1;i<n;i++){
            let max,prev = dp 
            for(let k =0; k<3; k++){
                let maxofPoint = 0
                for(let j =0; j<3; j++){
                    if(i!==j){
                        maxofPoint = Math.max(maxofPoint, arr[i][j]+prev[j])
                    }
            }
            dp[k] = maxOfPoint
                    
                }
            }
            
            return Math.max(dp)
        
        */
        
        let dp = arr[0]
        
        for(let i= 1; i<arr.length;i++){
            let prev = [...dp]
            for(let k=0; k<3;k++){
                let maxOfPoint = 0
                for(let j=0;j<3;j++){
                    if(k!==j){
                        maxOfPoint = Math.max(maxOfPoint,arr[i][k]+prev[j])
                    }
                }
                dp[k] = maxOfPoint
                // console.log({i,k,prev,maxOfPoint,curValue: arr[i][k]})
            }
            // console.log({dp})
        }
        return Math.max(...dp)
    }
}