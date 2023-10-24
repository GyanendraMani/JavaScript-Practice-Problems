const mergeArray = require("./mergeArray");


const mergeSort = (arr) => {

    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);

    console.log("printing mid", mid)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right);
}


const result = mergeSort([4, 5, 63, 7, 2, 3, 4, 5, 6, 7, 89, 6, 4, 444, 232, 44, 55, 67,])

console.log("printing final result sorted array", result);