class Solution {
    getPairsCount(arr, n, k) {
        //code here
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] === k) {
                    console.log("printing inside if", arr[i], arr[j])
                    count++;
                }
            }
        }
        return count;
    }
   


}

const ins = new Solution();
const arr = [48, 24, 99, 51, 33, 39, 29, 83, 74, 72, 22, 46, 40, 51, 67, 37, 78, 76, 26, 28, 76, 25, 10, 65, 64, 47, 34, 88, 26, 49, 86, 73, 73, 36, 75, 5, 26, 4, 39, 99, 27, 12, 97, 67, 63, 15, 3, 92, 90]

const get = ins.getPairsCount(arr, 49, 50);

console.log("printing find", get);


