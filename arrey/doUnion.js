class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m) {
        // code here
        let common = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (a[i] == b[j]) {
                    common++
                }
            }
        }
        return a.length + b.length - common;
    }
}

const ins = new Solution();
const get = ins.doUnion([1, 2, 3, 4, 5], 5, [1, 2, 3], 3)

console.log("printing and of get ", get)