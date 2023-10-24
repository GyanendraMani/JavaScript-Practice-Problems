function bigSorting(unsorted) {
    // Write your code here
    
    unsorted = unsorted.map(function(str) {
        // using map() to convert array of strings to numbers

        return parseInt(str); });


      for (let i = 0; i < unsorted.length; i++) {
        for (let j = 0; j < unsorted.length; j++) {
            if (unsorted[j] > unsorted[j + 1]) {
                let temp = unsorted[j + 1];
                unsorted[j + 1] = unsorted[j];
                unsorted[j] = temp;
            }
        }
    }

    return unsorted;

}

const result = bigSorting(['32','434','1000','4','3'])

console.log(result);
