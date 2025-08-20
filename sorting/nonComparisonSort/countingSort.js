const countSort = (arr) => {
    /*
        length of the counting arrray is the max value in arr + 1
        counting sort is only applicable for non-negative integers
        and +1 for suppose the number is 23 so to have an index 23 we need 24 elements
        keep in mind that counting sort should be applicable only if the range of the 
        input numbers is not significantly larger than the number of elements to be sorted
    */
    const size = Math.max(...arr) + 1

    const countArr = Array(size).fill(0)
    arr.forEach((a) => {
        countArr[a] += 1
    })

    for (let i = 1; i < size; i++) {
        countArr[i] += countArr[i - 1]
    }
    let result = Array(arr.length)
    // swap

    for (let i = 0; i < arr.length; i++) {
        val = arr[i]
        idx = countArr[val] - 1
        result[idx] = val
        countArr[val] -= 1
    }
    return result
}