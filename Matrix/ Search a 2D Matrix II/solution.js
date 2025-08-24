var searchMatrix = function(matrix, target) {
    const rowLen = matrix.length,
        colLen = matrix[0].length

    // follow left and down approach
    let i = 0, j = colLen-1
    while(i<rowLen && j>=0){
        const curVal = matrix[i][j]
        if(curVal===target)
            return true
        else if(curVal>target)
            j--
        else
            i++
    }

    return false
}