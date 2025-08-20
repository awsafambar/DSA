const arr = [170, 90, 802, 2, 24, 45, 75, 66]
const len = arr.length
const countSort = (arr, num) => {
    let result = Array(len).fill(0);
    const size = 10;
    const countArr = Array(size).fill(0);

    // 1. Count occurrences of each digit
    arr.forEach((a) => {
        let idx = Math.floor(a / num) % 10;
        countArr[idx]++;
    });

    // 2. Build cumulative count
    for (let i = 1; i < size; i++) {
        countArr[i] += countArr[i - 1];
    }
    
    // why backward. check note
    for (let i = len-1; i>=0; i--) {
        val = Math.floor(arr[i]/num)%10
        idx = countArr[val]-1
        result[idx] = arr[i]
        countArr[val]--
    }
    
    for (let i = 0; i < len; i++) {
        arr[i] = result[i];
    }
    console.log({num,arr})
}

const radixSort = () => {
    const maxDigit = Math.max(...arr)
    
    for(let i = 1; Math.floor(maxDigit / i) > 0; i *= 10){
        countSort(arr,i)
    }
    
    return arr
}

console.log("Try programiz.pro", radixSort());