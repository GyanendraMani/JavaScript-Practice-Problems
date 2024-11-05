function linearSearch(arr, num) {
    // add whatever parameters you deem necessary - good luck!

    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        }
    }
    return index;


}


console.log(linearSearch([10, 15, 20, 25, 30], 153))