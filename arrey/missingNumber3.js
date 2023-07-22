

class Solution {

    findMissingNumber(arr, n) {
        console.log("printing arr", arr)
        let total = 0;
        let totalArr = 0;
        for (let i = n; i > 0; i--) {
            console.log("printing i", i)
            total += i;
        }
        for (let j = 0; j < arr.length; j++) {
            totalArr += arr[j];
        }
        return total - totalArr;
    }

}

const ins = new Solution();
const get = ins.findMissingNumber([1, 2, 3, 5], 5);

console.log("printing missing number ", get)