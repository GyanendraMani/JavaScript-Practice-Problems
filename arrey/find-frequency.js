class Solution {
    findFrequency(v, n, x) {
        //code here
        let count = 0;
        for (let i = 0; i < v.length; i++) {
            if (v[i] === x) {
                count++
            }
        }
        return count;

    }
}

const ins = new Solution();
const findF = ins.findFrequency([1, 1, 1, 3, 4, 2, 2, 1, 1], 9, 2)

console.log("printing find", findF);