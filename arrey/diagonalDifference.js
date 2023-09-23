function diagonalDifference(arr) {
    // Write your code here
    var n = arr.length;
    var d1 = 0;
    var d2 = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === j) {
                d1 += arr[i][j];
            }
            if (i + j === n - 1) {
                d2 += arr[i][j];
            }
        }
    }
    return Math.abs(d1 - d2);
}



let arr = [[1, 2, 5], [3, 4, 5], [5, 3, 2]];
const result = diagonalDifference(arr);

console.log("printing result", result);