/**
 * @param {number[]} nums
 * @return {number}
 * 
 * using Radix sort to sort the array in linear time
 * and then finding the maximum gap between successive elements.
 * still it's talking long time because of large values of max and min.
 */
var maximumGap = function (nums) {
    const l = nums.length

    if (l < 2)
        return 0

    let min = Number.MAX_SAFE_INTEGER,
        max = -1


    for (let i = 0; i < l; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
    }

    if (max === min)
        return 0

    const bucketRange = Math.ceil((max - min) / (l - 1))
    const numberOfBuckets = Math.floor((max - min) / bucketRange) + 1

    const buckets = Array(numberOfBuckets).fill().map(() => ({
        min: Number.MAX_SAFE_INTEGER,
        max: -1
    }));

    for (let i = 0; i < l; i++) {
        let index = Math.floor((nums[i] - min) / bucketRange)
        buckets[index].min = Math.min(buckets[index].min, nums[i])
        buckets[index].max = Math.max(buckets[index].max, nums[i])
    }
    let maxGap = 0, prev_max = buckets[0].max // (the logic i was thinking for prev bucket max value is this. Initialise begining as min)
    for (let k = 1; k < numberOfBuckets; k++) {
        if (buckets[k].max === -1)
            continue;

        maxGap = Math.max(maxGap, buckets[k].min - prev_max)
        prev_max = buckets[k].max

    }

    return maxGap
};