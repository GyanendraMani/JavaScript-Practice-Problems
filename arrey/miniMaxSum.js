function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;

    arr.sort((a,b)=> a-b);

    for (let i = 0; i < 4; i++) {
        minSum += arr[i];
        maxSum += arr[i+1]
    }

    console.log(minSum, maxSum)

}

miniMaxSum([1, 3, 5, 7, 9])