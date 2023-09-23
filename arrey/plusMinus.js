function plusMinus(arr) {
    // Write your code here
    let lessThanZero = 0;
    let greaterThanZero = 0;
    let equalToZero = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            lessThanZero++;
        } else if (arr[i] > 0) {
            greaterThanZero++;
        } else {
            equalToZero++
        }
    }

    lessThanZero = (lessThanZero / n).toFixed(5);
    greaterThanZero = (greaterThanZero / n).toFixed(5);
    equalToZero = (equalToZero / n).toFixed(5);

    console.log(greaterThanZero);
    console.log(lessThanZero);
    console.log(equalToZero);


}

plusMinus([-4, 3, -9, 0, 4, 1])