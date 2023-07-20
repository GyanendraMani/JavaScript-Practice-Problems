class Solution {

    sort012(arr, N) {
        //your code here
        const assendingSort = (a, b) => {
            return a - b;
        }

        const sort = arr.sort(assendingSort);
        return sort;
    }
}


const ins = new Solution();
const sort012 = ins.sort012([0, 2, 1, 2, 0], 5);

console.log("printing find", sort012);