class Solution {
    findMaxSubarraySum(arr, num) {

        let maxSum = 0;
        let tempSum = 0;

        if (num > arr.length) {
            return null;
        }

        for (let i = 0; i < num; i++) {
            maxSum += arr[i];
        }
        tempSum = maxSum;
        for (let i = num; i < arr.length; i++) {
            
            tempSum = tempSum - arr[i - num] + arr[i];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    }
}

const ins = new Solution();
const result = ins.findMaxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log("printing result", result);