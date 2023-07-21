
class Solution {
    missingNumber(a, n) {
        //code here
        let i, total = 1;

        for (i = 2; i < (n + 1); i++) {
            total += i;
            total -= a[i - 2];
        }
        return total;
    }
}

const ins = new Solution();
const get = ins.missingNumber([1, 2, 4, 5], 4);

console.log("printing find", get);

