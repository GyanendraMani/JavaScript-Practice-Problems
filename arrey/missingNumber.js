
class Solution {
    missingNumber(a, n) {
        //code here
        let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
    }
}

const ins = new Solution();
const get = ins.missingNumber([1, 2, 4, 5], 4);

console.log("printing find", get);

