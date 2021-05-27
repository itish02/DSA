// RADIX SORT WITH HELPER METHODS
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

const radixSort = (nums) => {
    let mostDigitsCount = mostDigits(nums);
    // console.log(mostDigitsCount);
    for (let k = 0; k < mostDigitsCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        // console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        // console.log(nums);
    }
    return nums;
}