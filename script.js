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
// console.log(sumRange(5));

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
//console.log(fact(4));

// recursion with a helper function
const returnOdd = (arr) => {
        let result = [];
        const helper = (helperInput) => {
            if (helperInput.length === 0) return;
            if (helperInput[0] % 2 !== 0) {
                result.push(helperInput[0]);
            }
            helper(helperInput.slice(1));
        }
        helper(arr);
        return result;
    }
    // console.log(returnOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// pure recursion
const collectOdds = (arr) => {
        let newArr = [];
        if (arr.length === 0) {
            return newArr;
        }
        if (arr[0] % 2 !== 0) {
            newArr.push(arr[0]);
        }
        newArr = newArr.concat(collectOdds(arr.slice(1)));
        return newArr;
    }
    // console.log(collectOdds([1, 2, 3, 4, 45, 6, 7]));

// POWER FUNCTION
const pwrFunc = (base, exp) => {
        if (exp === 0) {
            return 1;
        }
        return base * pwrFunc(base, exp - 1);
    }
    // console.log(pwrFunc(4, 3));

// PRODUCT OF ARRAY
const arrayProduct = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * arrayProduct(arr.slice(1));
};

// FIBONACCI
const fib = (n) => {
        if (n <= 2) return 1;
        return fib(n - 1) + fib(n - 2);
    }
    // console.log(fib(7));

// STRING REVERSE
const reverse = (str) => {
        if (str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }
    // console.log(reverse('itish'));



// console.log(ourArr);

// BUBBLE SORT
const bubbleSort = (arr) => {
        let noSwaps;
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }
        for (let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for (let j = 0; j < i - 1; j++) {
                console.log(arr, arr[j], arr[j + 1]);
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    noSwaps = false;
                }
            }
            if (noSwaps) {
                console.log('No swaps this time. Breaking')
                break;
            }
        }
        return arr;
    }
    // bubbleSort([3, 1, 8, 5, 4, -1, 10]);

// SELECTION SORT
const selectionSort = (arr) => {
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }
        for (let i = 0; i < arr.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[lowest]) {
                    lowest = j;
                    // console.log(lowest);
                }
            }
            if (i !== lowest) swap(arr, i, lowest);
        }
        return arr
    }
    // console.log(selectionSort([3, 1, 8, 5, 4, -1, 10]));

// INSERTION SORT
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // console.log(arr, arr[j], arr[i]);
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
        }
    }
    return arr
}
console.log([2, 1, 4, 19, 9])
console.log(insertionSort([2, 1, 4, 19, 9]));

// MERGING SORTED ARRAYS
const merge = (arr1, arr2) => {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i])
                i++;
            } else {
                result.push(arr2[j])
                j++;
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i])
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j])
            j++;
        }
        return result
    }
    // console.log(merge([1, 10, 50], [2, 14, 88, 100]));

// MERGE SORT
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(mergeSort([1, 10, 50, 2, 14, 88, 100]));




























// const grandpa = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#children');

// grandpa.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     console.log('Grandpa clicked')
// }, true);

// parent.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('Parent clicked');
// }, true);

// child.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     console.log('Child clicked');
// }, true);

// document.querySelector('#categories').addEventListener('click', (e) => {
//     console.log(e.target.tagName);
// window.location.href = `/ ${e.target.id}`;
// console.log('categories clicked.');
// })

// EVENT DELEGATION
// document.querySelector('#form').addEventListener('click', (e) => {
//     // console.log(e);
//     if (e.target.dataset.uppercase !== undefined) {
//         e.target.value = e.target.value.toUpperCase();
//     }
//     if (e.target.dataset.lowercase !== undefined) {
//         e.target.value = e.target.value.toLowerCase();
//     }
// })