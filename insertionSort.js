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