function insertionSort(arr) {
    console.log("printing array ", arr);

    let currentVal

    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        let j;
        console.log("array started", arr[i])

        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
            console.log(arr)
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

insertionSort([2, 1, 9, 76, 4])