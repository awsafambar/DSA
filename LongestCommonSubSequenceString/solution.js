/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const size1 = text1.length,
        size2 = text2.length;

    let prev = Array(size2 + 1).fill(0)

    for (let i = size1 - 1; i >= 0; i--) {
        let cur = Array(size2 + 1).fill(0)
        for (let j = size2 - 1; j >= 0; j--) {
            if (text1?.[i] === text2?.[j])
                cur[j] = 1 + prev[j + 1]
            else
                cur[j] = Math.max(prev[j], cur[j + 1])
        }
        prev = cur
    }

    return prev[0]
};