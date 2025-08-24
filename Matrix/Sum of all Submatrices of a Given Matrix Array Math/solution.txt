var solve = function (input) {
    const rowLen = input.length,
        colLen = input[0].length
    
    let total =0
    for(let i =0; i < rowLen; i++){
        for(let j = 0; j< colLen; j++){

            const topLeft = (i+1)*(j+1),
                bottomRight = (rowLen-i)*(colLen-j)
            
            total += (topLeft*bottomRight*input[i][j])

        }
    }

    return total

};