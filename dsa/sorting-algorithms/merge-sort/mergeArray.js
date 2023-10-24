const mergeArray = (arr1, arr2) => {

    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }

    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++

    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++

    }

    return result;

}

module.exports = mergeArray;

// const result = mergeArray([6, 5, 4, 10], [2, 4, 6, 10, 32, 54, 65, 2]);

// console.log("printing result", result);