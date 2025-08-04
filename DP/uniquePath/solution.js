/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let up = Array(n).fill(0)
    let left = 1

    for (let i = 0; i < m; i++) {
        let cur = []
        cur.push(1)

        // started from 1 so left will always be 1
        for (let j = 1; j < n; j++) {
            cur.push(up[j] + left)
            left = cur[j]
        }
        // console.log({ i, cur })
        up = [...cur]
        left = 1
    }

    return up[n - 1]
};