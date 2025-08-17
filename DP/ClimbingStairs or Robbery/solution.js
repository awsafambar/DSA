/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    /* 
    fibonacci using TWO pointer
    */
    let prev = 1,
        cur = 2,
        next = 0,
        i = 3

    if (n === 1)
        return prev

    while (i <= n) {
        next = prev + cur
        prev = cur
        cur = next
        next = 0
        i++
    }

    return cur
};