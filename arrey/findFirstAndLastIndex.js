class Solution {
    find(arr, n, x) {
        //code here

        let first = -1;
        let last = -1;
        for (let i = 0; i < n; i++) {

            if (arr[i] === x && first == -1) {
                first = i;
            }
            if (arr[i] === x && first != -1) {
                last = i;
            }

        }
        console.log("printing first and last", first , last);
        return [first, last];
    }
}


const ins = new Solution();
const result = ins.find([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5);

console.log("printing result", result);