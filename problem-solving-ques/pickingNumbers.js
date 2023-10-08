function pickingNumbers(a) {
    // Write your code here

    let array = Array(a.length).fill(0), max = 0;
    
    for (let i = 0; i < a.length; i++) {
        array[a[i]]++;
    }

    for (let i = 0; i < a.length; i++) {
        if (array[i] + array[i + 1] > max) {
            max = array[i] + array[i + 1];
        }
    }

    return max;
}


console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))