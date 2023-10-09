function binarySearch(arr, num) {
    // add whatever parameters you deem necessary - good luck!

    let startIndex = 0;
    let endIndex = arr.length - 1;
    let midleIdex = Math.floor((startIndex + endIndex) / 2);

    while (arr[midleIdex] !== num && startIndex <= endIndex) {
        if (arr[midleIdex] > num) {
            endIndex = midleIdex - 1;
        } else {
            startIndex = midleIdex + 1;
        }
        midleIdex = Math.floor((startIndex + endIndex) / 2);
    }
    if (arr[midleIdex] === num) return midleIdex;
    else return -1

}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10))