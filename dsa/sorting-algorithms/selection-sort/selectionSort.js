function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (j = i + 1; j < arr.length; j++) {
            console.log("printing lowest",arr[j])

            if (arr[j] < arr[lowest]) {
                console.log("printing lowest",lowest)

                lowest = j;
            }
        }
        if (i !== lowest) {
            //SWAP!
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        console.log("printing array",arr)
    }


    return arr;
}


const result = selectionSort([0, 2, 34, 22, 10, 19, 17]);
console.log(result);