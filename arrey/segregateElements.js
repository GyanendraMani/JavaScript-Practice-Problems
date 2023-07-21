class Solution {
    segregateElements(arr, n) {
        //code here
        let positive = []
        let negative = []
        for (let i = 0; i < n; i++) {
            if (arr[i] > 0) {
                positive.push(arr[i])
            } else {
                negative.push(arr[i])
            }
        }

        return [...positive, ...negative];
    }
}

const ins = new Solution();
const get = ins.segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 8)

console.log("pritng get", get);