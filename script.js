// checking squared array
const sameArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] ? freqCounter1[val] : 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] ? freqCounter2[val] : 0) + 1;
    }
    // console.log(freqCounter1);
    // console.log(freqCounter2);
    for (let keys in freqCounter1) {
        if (!(keys ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[keys ** 2] !== freqCounter1[keys]) {
            return false;
        };
    };
    return true;
};

// console.log(sameArr([3, 2, 2, 4], [4, 9, 16, 4]));


// function to check anagram
function anagramCheck(str1, str2) {
    // if (str1.length !== str2.length) {
    //     return false;
    // }
    let newStr1 = str1.toLowerCase();
    let newStr2 = str2.toLowerCase();
    let obj1 = {};
    let obj2 = {};
    for (char of newStr1) {
        obj1[char] = (obj1[char] ? obj1[char] : 0) + 1;
    }
    for (char of newStr2) {
        obj2[char] = (obj2[char] ? obj2[char] : 0) + 1;
    }
    // console.log(obj1);
    // console.log(obj2);
    for (key in obj1) {
        if (!(key in obj2)) {
            return false
        }
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true;
}

// console.log(anagramCheck('dirtyroom', 'dormitory'));


// checking zero sum in an sorted array
const sumZero = (arr) => {
        let newArr = arr.sort((a, b) => a - b);
        console.log(newArr);
        let left = 0;
        let right = newArr.length - 1;
        // console.log(newArr[left], newArr[right]);
        // console.log(sum);
        while (left < right) {
            let sum = newArr[left] + newArr[right];
            // console.log(sum);
            if (sum === 0) {
                return [newArr[left], newArr[right]];
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }

        }
    }
    //console.log(sumZero([4, 1, 5, -3, -8, 3, 2, -4]));


// count unique values
function uniqueValues(arr) {
    // let arr = arr.sort((a, b) => a - b);
    // console.log(arr);
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};

// console.log(uniqueValues([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]));


// checking single occurring element
function singleEl(arr) {
    let dictionary = {};
    for (let val of arr) {
        dictionary[val] = (dictionary[val] ? dictionary[val] : 0) + 1;
    };
    console.log(dictionary);
    for (let key in dictionary) {
        if (dictionary[key] === 1) {
            console.log(key);
        };
    };
};

// singleEl([1, 1, 1, 2, 2, 3]);

// Binary Search
const binarySearch = (arr, elem) => {
        let start = 0;
        let end = arr.length - 1;
        let middle = Math.floor((start + end) / 2);
        // console.log(start, middle, end);
        while (arr[middle] !== elem && start <= end) {
            if (elem < arr[middle]) end = middle - 1;
            else start = middle + 1;
            middle = Math.floor((start + end) / 2);
        };
        //  console.log(start, middle, end);
        return arr[middle] === elem ? middle : -1;
    }
    // console.log(binarySearch([2, 3, 5, 8, 11, 13, 15, 21, 23, 27, 31, 42, 49, 52], 42));

const naiveSearch = (long, short) => {
        let count = 0;
        for (let i = 0; i < long.length; i++) {
            for (let j = 0; j < short.length; j++) {
                console.log(short[j], long[i + j])
                if (short[j] !== long[i + j]) {
                    console.log('BREAK!');
                    break;
                }
                if (j === short.length - 1) {
                    console.log('FOUND ONE!');
                    count++;
                }
            }
        }
        console.log(count);
    }
    // naiveSearch('lorrie lolled', 'lol');

// Recursion
const countNum = (num) => {
        if (num <= 0) {
            console.log('All done!');
            return;
        }
        console.log(num);
        num--;
        countNum(num);
    }
    // countNum(4);


const sumRange = (num) => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
};
console.log(sumRange(5));

// Factorial iteratively
// const factorial = (num) => {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// };
// console.log(factorial(5));

// Factorial recursively
const fact = (num) => {
    if (num === 1) return 1;
    return num * fact(num - 1);
};
console.log(fact(4));